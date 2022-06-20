const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const questionCounterElement = document.getElementById('questionCounter')

const questions = [
    {
        //P01
        question: 'Have you worked with a terminal/shell before?',
        answers: [
            { text: 'yes', correct: null},
            { text: 'no', correct: null}
        ]
    },
    {
        //P02
        question: 'Have you worked with linux before?',
        answers: [
            { text: 'yes', correct: null},
            { text: 'no', correct: null}
        ]
    },
    {
        //P03
        question: 'Have you worked with a SIEM system before?',
        answers: [
            { text: 'yes', correct: null},
            { text: 'no', correct: null}
        ]
    },
    {
        //P04
        question: 'Have you heard about IR before?',
        answers: [
            { text: 'yes', correct: null},
            { text: 'no', correct: null}
        ]
    },
    {
        //P05
        question: 'Have you attended a CR/CTF before?',
        answers: [
            { text: 'yes', correct: null},
            { text: 'no', correct: null}
        ]
    },
    {
        //Q01
        question: 'What is an IP address?',
        answers: [
            { text: 'The network address of a device', correct: true},
            { text: 'The hardware address of device', correct: false},
            { text: 'The domain name of a service', correct: false},
            { text: 'The address for telephonic transmission of scanned printed', correct: false}
        ]
    },
    {
        //Q02
        question: 'What is a MAC address?',
        answers: [
            { text: 'The hardware address of a device', correct: true},
            { text: 'The network address of a device', correct: false},
            { text: 'The domain name of a service', correct: false},
            { text: 'The unique address of subscriber identity modules (SIM)', correct: false}
        ]
    },
    {
        //Q03
        question: 'What is the TCP protocol?',
        answers: [
            { text: 'A network-layer protocol, defining how data is exchanged between network components on the network layer', correct: true},
            { text: 'A cryptographic protocol designed to provide communications security over a computer network', correct: false},
            { text: 'An internet-layer protocol for exchange of information and error messages when communicating with another IP address', correct: false},
            { text: 'An application-layer Internet standard protocol used by e-mail clients', correct: false}
        ]
    },
    {
        //Q04
        question: 'What is the ARP protocol?',
        answers: [
            { text: 'A communication protocol mapping IP addresses to MAC addresses', correct: true},
            { text: 'A network-layer protocol, defining how data is exchanged between network components on the network layer', correct: false},
            { text: 'A cryptographic protocol designed to provide communications security over a computer network', correct: false},
            { text: 'A network protocol for operating network services securely over an unsecured network', correct: false}
        ]
    },
    {
        //Q05
        question: 'What is a PLC(SPS)?',
        answers: [
            { text: 'An industrial computer control system, e.g. for controlling sensorsn', correct: true},
            { text: 'The processing unit of a computer', correct: false},
            { text: 'A multi-purpose computer operated by an end user', correct: false},
            { text: 'The core of a computer’s operating system', correct: false}
        ]
    },
    {
        //Q06
        question: 'What is an ICS?',
        answers: [
            { text: 'A virtually connected physical system', correct: true},
            { text: 'A user interface for interaction with physical maschines', correct: false},
            { text: 'An industrial sensor', correct: false},
            { text: 'The digital representation of a physical asset', correct: false}
        ]
    },
    {
        //Q07
        question: 'What is the purpose of a SIEM system?',
        answers: [
            { text: 'Correlating security-relevant data from across the entire network to detect incidents', correct: true},
            { text: 'Reporting the status of the current tasks of the cyber security team', correct: null},
            { text: 'Controlling incoming an outgoing network traffic based on predetermined security rules', correct: null},
            { text: 'Performing integrated management of main business process', correct: null}
        ]
    },
    {
        //Q08
        question: 'What is a SIEM event?',
        answers: [
            { text: 'A security-related log, transmitted to a SIEM system', correct: true},
            { text: 'An attack identified by the SIEM system', correct: false},
            { text: 'A conference for SIEM experts', correct: false},
            { text: 'A potentially manipulated file, identified by the SIEM system', correct: false}
        ]
    },
    {
        //Q09
        question: 'What is the difference between a SIEM system and an IDS?',
        answers: [
            { text: 'A SIEM correlates security-related  log data from various sources an IDS monitors a network for suspicious activities', correct: true},
            { text: 'A SIEM is the technical component of an IDS', correct: false},
            { text: 'There is no difference', correct: false},
            { text: 'A SIEM operates on a network, an IDS on an application layer', correct: false}
        ]
    },
    {
        //Q10
        question: 'What is a Man In The Middle (MiTM) Attack?',
        answers: [
            { text: 'Intercepting the network traffic between to parties', correct: true},
            { text: 'Exhausting the system resources of a server', correct: false},
            { text: 'Phising for passwords via malicous email', correct: false},
            { text: 'A malware attack targeting middleware', correct: false}
        ]
    },
    {
        //Q11
        question: 'Effect of a MiTM Attack on an industrial system?',
        answers: [
            { text: 'Inability of the ICS to read the sensor values, resulting in an interruption of the physical process', correct: true},
            { text: 'Escalation of priviledge on an HMI', correct: false},
            { text: 'Replication of malware code on other devices in the network', correct: false},
            { text: 'Temporary inaccessibility of the ICS because it is flooded with requests', correct: false}
        ]
    },
    {
        //Q12
        question: 'How does ARP spoffing work?',
        answers: [
            { text: 'Linking the attacker’s MAC address with the IP of the victim', correct: true},
            { text: 'Poisoning the DNS cache of a client', correct: false},
            { text: 'Replacing the IP address of a network packet', correct: false},
            { text: 'Changing a factory-assigned IP address of a network interface', correct: false}
        ]
    },
    {
        //Q13
        question: 'What is Incident Respons mainly concerned with?',
        answers: [
            { text: 'Reacting to security incidents in a coherent and repeatable manner', correct: true},
            { text: 'Secure SW development', correct: false},
            { text: 'Implementing security controls such as anti malware software or access control', correct: false},
            { text: 'Managment of security risks and policies', correct: false}
        ]
    },
    {
        //Q14
        question: 'What is the first step of incident response?',
        answers: [
            { text: 'Preparation', correct: true},
            { text: 'Investigation', correct: false},
            { text: 'Response', correct: false},
            { text: 'Analysis', correct: false}
        ]
    },
    {
        //Q15
        question: 'What is an inciden response playbook?',
        answers: [
            { text: 'A list of actions how to react to a specific kind of incident', correct: true},
            { text: 'A software for incident management', correct: false},
            { text: 'A standard for incident categorization', correct: false},
            { text: 'A database for cyber threat intelligence', correct: false}
        ]
    },
    {
        //Q16
        question: 'How can you identify the attacking host during an ARP-based MiTM Attack?',
        answers: [
            { text: 'Identifying which MAC address is falsley assigned to another network host', correct: true},
            { text: 'Identifying the network host which sends an unusual high amount of requests', correct: false},
            { text: 'Identifying the network host opening a VPN connection', correct: false},
            { text: 'Identifying who modified the /etc/shadow', correct: false}
        ]
    },
    {
        //Q17
        question: 'How can you make an ARP cache static?',
        answers: [
            { text: 'arp -s<IP><MAC>', correct: true},
            { text: 'arp -a<MAC1><MAC2>', correct: false},
            { text: 'vi /etc/sysconfig/network', correct: false},
            { text: 'more /etc/hosts --static', correct: false}
        ]
    },
    {
        //Q18
        question: 'How can you take down the interface of a network device?',
        answers: [
            { text: 'ip link set dev <INTERFACE> down', correct: true},
            { text: 'ifconfig <INTERFACE>', correct: false},
            { text: 'service network stop', correct: false},
            { text: 'ip route list <INTERFACE>', correct: false}
        ]
    }
]

let shuffledQuestions, currentQuestionIndex

//startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    console.log("test")
    currentQuestionIndex++
    setNextQuestion()
})

function startGame(){
    document.getElementById("startScreen").style.display = 'none';
    document.getElementById("quizScreen").style.display = 'block';

    console.log('Started')
    //foreach questions as question --> question.answer.sort....
    //shuffledQuestions = questions.sort(() => Math.random() - .25)
    currentQuestionIndex = 0
    //console.log(shuffledQuestions)
    

    setNextQuestion()

}

function setNextQuestion(){
    //resetState()
    showQuestion(questions[currentQuestionIndex])
}

function showQuestion(question){
    if(currentQuestionIndex <= 22){
    questionCounterElement.innerText = currentQuestionIndex+1+'.Question'
}else{
    endGame()
}
    questionElement.innerText = question.question
    counter = 1;
    question.answers.forEach(answer => {
        const button = document.getElementById('op'+counter)
        button.innerText = answer.text
        if (answer.correct){
            button.dataset.correct = answer.correct
        }
        //const button = document.createElement('button')
        //button.innerText = answer.text
        //if (answer.correct){
        //    button.dataset.correct = answer.correct
        //}
       
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
        counter++
      
    })
}

//TO-DO: Comment
function resetState(){
    while (answerButtonsElement.firstChild){
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}

function selectAnswer(e){
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
   // if(shuffledQuestions.length > currentQuestionIndex + 1)

}

function setStatusClass(element, correct){
    clearStatusClass(element)
    if (correct){
        element.classList.add('correct')
    }else{
        element.classList.add('wrong')
    }
}

function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

function endGame(){
    document.getElementById("quizScreen").style.display = 'none';
    document.getElementById("endScreen").style.display = 'block';
    
}
