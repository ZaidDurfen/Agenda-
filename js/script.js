const app = {
    data() {
        return {
            contacts: [],
            contactName: '',
            contactPhone: '',
            contactCategory: ''
        };
    },
    computed: {
        totalCalls() {
            return this.contacts.reduce((sum, contact) => sum + contact.calls, 0);
        },
        totalMessages() {
            return this.contacts.reduce((sum, contact) => sum + contact.messages, 0);
        }
    },
    methods: {
        addContact() {
            if (this.contactName && this.contactPhone && this.contactCategory) {
                this.contacts.push({
                    name: this.contactName,
                    phone: this.contactPhone,
                    category: this.contactCategory,
                    calls: 0,
                    messages: 0
                });
                this.contactName = '';
                this.contactPhone = '';
                this.contactCategory = '';
            }
        },
        removeContact(index) {
            this.contacts.splice(index, 1);
        }
    }
};

Vue.createApp(app).mount('#app');
