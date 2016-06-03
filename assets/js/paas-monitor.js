/**
 * Identification
 */
var Identifier = React.createClass({
  render: function() {
    return (
      <div id="identifier">
        <h2>Identifier</h2>
        <p>{this.props.identifier}</p>
      </div>
    )
  }
});

/**
 * Uptime
 */
var Uptime = React.createClass({
  render: function() {
    var uptime = Math.round((new Date().getTime() - this.props.start) / 1000);
    return (
      <div id="uptime">
        <h2>Uptime</h2>
        <p>{uptime}</p>
      </div>
    )
  }
});

/**
 * Message
 */
var Message = React.createClass({
  render: function() {
    var message = this.props.message;
    return (
      <li>[{message.id}]{message.author}: {message.message}</li>
    )
  }
});

/**
 * Message List
 */
var MessageList = React.createClass({
  render: function() {
    var messages = this.props.messages;
    return (
      <div id="messages">
        <h2>Messages ({messages.length})</h2>
        <ul>
        {messages.map(function(message) {
          return <Message key={message.id} message={message}/>
        })}
        </ul>
      </div>
    )
  }
});

/**
 * Peer
 */
var Peer = React.createClass({
  render: function() {
    var peer = this.props.peer;
    return (
      <li>[{peer.id}]{peer.host}: {peer.port}</li>
    )
  }
});

/**
 * Peer List
 */
var PeerList = React.createClass({
  render: function() {
    var peers = this.props.peers;
    return (
      <div id="peers">
        <h2>Peers ({peers.length})</h2>
        <ul>
        {peers.map(function(peer) {
          return <Peer key={peer.id} peer={peer}/>
        })}
        </ul>
      </div>
    )
  }
});

var Environment = React.createClass({
  render: function() {
    var variables = this.props.variables;
    var keys = Object.getOwnPropertyNames(variables);
    return (
      <div id="environment">
        <h2>Environment</h2>
        <table>
          <tbody>
          {keys.map(function(key, index) {
            var counter = 0;
          return (
            <tr key={index}>
              <td>{key}</td>
              <td>{variables[key]}</td>
            </tr>
          )
          })}
          </tbody>
        </table>
      </div>
    )
  }
});

/**
 * Kill Button
 */
var KillButton = React.createClass({
  render: function() {
    return (
      <div id="killme">
        <h2>Kill the PAAS Monitor</h2>
        <button onClick={this.props.onClick}>Kill me</button>
      </div>
    )
  }
});

/**
 * Paas Monitor
 */
var PaasMonitor = React.createClass({
  getInitialState: function() {
    return {
      alive: true,
      identifier: "",
      messages: [],
      peers: [],
      environment: {}
    };
  },

  componentDidMount: function() {
    // Fetch peers
    this.peersRequest = $.get("/peers", function (result) {
      this.setState({
        peers: result
      });
    }.bind(this), "json");

    // Fetch environment variables
    this.environmentRequest = $.get("/environment", function (result) {
      this.setState({
        environment: result
      });
    }.bind(this), "json");

    // Fetch id
    this.idRequest = $.get("/id", function (result) {
      this.setState({
        identifier: result
      });
    }.bind(this), "json");
  },

  componentWillUnmount: function() {
    this.idRequest.abort();
    this.messagesRequest.abort();
    this.peersRequest.abort();
    this.environmentRequest.abort();
  },

  kill: function() {
    this.setState({
      alive: false
    });
    $.get("/kill");
  },

  render: function() {
    if (this.state.alive) {
      // Fetch messages
      this.messagesRequest = $.get("/messages", function (result) {
        this.setState({
          messages: result
        });
      }.bind(this), "json");

      return (
        <div>
          <Identifier identifier={this.state.identifier}/>
          <Uptime start={this.props.start}/>
          <PeerList peers={this.state.peers}/>
          <MessageList messages={this.state.messages}/>
          <Environment variables={this.state.environment}/>
          <KillButton onClick={this.kill}/>
        </div>
      )
    } else {
      return (
        <div>I died :(</div>
      )
    }
  }
});

/**
 * Entrypoint
 */
var start = new Date().getTime();
setInterval(function() {
  ReactDOM.render(
    <PaasMonitor start={start}/>,
    document.getElementById('paasmonitor')
  );
}, 1000);
