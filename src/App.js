import React from 'react';


class App extends React.Component{
    state = {seconds: 5, topic: "loading"};
    agenda = [
        {
            title: 'topic 2',
            time: 20
        },
        {
            title: 'topic 1',
            time: 10
        } 
    ];

    componentDidMount() {
        this.timer = setInterval(() => {
            const { seconds } = this.state

            if (seconds > 0) {
                this.setState(({ seconds }) => ({
                    seconds: seconds - 1
                }))
            }
            if (seconds === 0) {
                    this.nextTopic();
            } 
        }, 1000);
    }

    nextTopic = () => {
        
        const {time,title} = this.agenda.pop()
        this.setState({seconds: time, topic: title})

    }


    render(){
        return(
            <div>
                <h1>Topic {this.state.topic} </h1>
            <div>{this.state.seconds}</div>
            </div>
        );
    }
}

export default App;