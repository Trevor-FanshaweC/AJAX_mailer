import { SendMail } from "./components/mailer.js";

(() => {
    const { createApp } = Vue

    createApp({
        data() {
            return {
                message: 'Hello Vue!'
            }
        },

        methods: {
            processMailFailure(result) {
                // show a failure message in the UI
                console.table(this.$refs); // table shows us an object in table form
                alert('failure! and if you keep using an alert, DOUBLE failure!');

                debugger;
        
                // show some UI here to let the user know the mail attempt was successful
            },

            processMailSuccess(result) {
                // show a success message in the UI
                console.table(this.$refs); // table shows us an object in table form
                alert("success! but don't EVER use alerts. They are gross.");        
                // show some UI here to let the user know the mail attempt was successful
            },

            processMail(event) {
                // block the default submit behaviour
                debugger;        
                // use the SendMail component to try to process mail
                SendMail(this.$el.parentNode)
                    .then(data => this.processMailSuccess(data))
                    .catch(err => this.processMailFailure(err));
        
                    // the error handler in the catch block could actually be a generic catch-and-display function that handles EVERY error you might encounter during runtime. Might be a better strategy to pass in a flag or just a message and have the function display it in the UI
            }
        }
    }).mount('#mail-form')
})();