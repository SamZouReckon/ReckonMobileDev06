Ext.define('RM.controller.AddNoteC', {
    extend: 'Ext.app.Controller',

    requires: ['RM.view.AddNote'],
    config: {
        refs: {
            addNote: 'addnote',
            title: 'addnote #title',
            noteText: 'addnote #notetext',
            saveBtn: 'addnote #add'
        },
        control: {
            'addnote' :{
              show: 'onShow'
            },
            'addnote #back': {
                tap: 'back'
            },
            'addnote #add': {
                tap: 'onAdd'
            }
        }

    },

    showView: function (title, isEditable, saveText, text, cb, cbs) {
        this.noteTitle = title;
        this.isEditable = isEditable;
        this.saveText = saveText;
        this.noteText = text;
        this.noteCb = cb;
        this.noteCbs = cbs;
        var view = this.getAddNote();
        if (!view){            
            view = { xtype: 'addnote' };
        }
        RM.ViewMgr.showPanel(view);
    },
    
    onShow: function(){
        var saveBtn = this.getSaveBtn(), noteText = this.getNoteText();
        
        this.getTitle().setHtml(this.noteTitle);
        saveBtn.setHidden(!this.isEditable);
        saveBtn.setText(this.saveText);
        noteText.setValue(this.noteText);
        noteText.setReadOnly(!this.isEditable);
        noteText.setPlaceHolder(this.isEditable ? 'enter' : '');
        
    },

    isFormDirty: function(){        
        return this.getNoteText().getValue() != this.noteText;        
    },    
    
    onAdd: function () {
        var noteText = this.getNoteText().getValue();
        if(noteText)
            this.noteCb.call(this.noteCbs, noteText);
        else
          RM.AppMgr.showOkMsgBox('Please enter some text for the note');     
    },

    back: function () {
        
        if(this.isFormDirty()){
            RM.AppMgr.showUnsavedChangesMsgBox(
                function(btn){
                    if(btn == 'yes'){
                        this.onAdd();
                    }
                    else{
                        this.goBack();
                    }
                },
                this
            );
        }
        else{
            this.goBack();
        }

    },
    
    goBack: function () {
        RM.ViewMgr.back();
    }

});