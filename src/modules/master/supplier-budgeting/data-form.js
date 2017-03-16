import { inject, bindable, computedFrom } from 'aurelia-framework';

export class DataForm {
    @bindable title;
    @bindable readOnly;
    formOptions = {
        cancelText: "Batal",
        saveText: "Simpan",
        deleteText: "Hapus",
        editText: "Ubah",
    }
    bind(context) {
        this.context = context;
        this.data = this.context.data;
        this.error = this.context.error;

        this.cancelCallback = this.context.cancelCallback;
        this.deleteCallback = this.context.deleteCallback;
        this.editCallback = this.context.editCallback;
        this.saveCallback = this.context.saveCallback;
    }

    @computedFrom("data._id")
    get isEdit() {
        return (this.data._id || '').toString() != '';
    }
} 