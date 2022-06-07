const app = Vue.createApp({
    data: [{
        category: 'Pre-Knowledge Assesement',
        question: 'What is an IP adress?',
        solution: 'The network address of a device',
        falses: ['The hardware address of a device', 'The domain name of a service', 'The address for telephonic transmission of scanned printed material'],
        }, {
        category: 'Pre-Knowledge Assesement',
        question: 'What is a MAC address?',
        solution: 'The hardware address of a device',
        falses: ['The network address of a device', 'The domain name of a service', 'The unique address of subscriber identity modules (SIM)'],
        }],
        
    methods: {
        advanceToQuiz(){
            // Irgendwie auf Quiz kommen
        }
    }
    
    
})
