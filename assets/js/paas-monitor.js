var quotes = [
  "I&rsquo;ve had to go through a load of malarky just because the database setup part of the deployment cannot handle an existing table. And when I mentioned that it could be wrapped in a drop table if exists transaction I got the IM equivalent of blank looks",
  "Lost my phone under a pile of papers.  Luckily I didn&rsquo;t have to wait long till one of the alerts made it make a noise.",
  "Ah, I love the smell of pull requests in the morning. Smells like&hellip; hotfixes.",
  "He&rsquo;s missed a trick not calling this &ldquo;batshit&rdquo;",
  "It was that the database failed and it took it 30 secs to failover, by which time puma had gone into a tailspin and couldn&rsquo;t recover. Cascade-failure-tastic.",
  "I have devs asking if the training session will be recorded so they can watch later. Presumably they have important panicking and running around in circles scheduled for this afternoon.",
  "We&rsquo;re now trying PDD. Which is Production Driven Development swiftly followed by Panic Driven Development.",
  "We have reached the age of Spyware-First software development. I’m looking at you 90% of websites.",
  "The dev team themselves are excellent - they take advice, discuss what&rsquo;s best for all, act like DevOps themselves. They do packaging, they like telemetry a lot. It&rsquo;s the team leaders &amp; architects.  They run after the shiny like a cat on a laser.",
  "Hopefully no-one will say Nagios to me ever again.",
  "We&rsquo;d need two out of five to fail on both clusters before we&rsquo;d lose anything customer facing. Or the DC to burn down.",
  "Cassandra is a RAVES. Redundant Array of Very Expensive Servers",
  "Yeah.  It&rsquo;s all broken. Our wallboard is a really nice checked pattern of red and green. Sort of like a panic inducing tartan.",
  "I&rsquo;m not sure whether the problem here is the prod alerts firing, or the decision to call something &lsquo;prod&rsquo; when it isn&rsquo;t prod quality yet.",
  "This bug shouldn&rsquo;t even exist. I mean, why? I may make a pull request that fixes it by deleting the entire repo.",
  "Eng1: Where are we at with the client’s backups?\n\nEng2: I know that there is a backup running. I know it because BareOS attempting to start new jobs backing up their host has cancelled them because there was already a running job for that host. I also know that if I touch the client’s backup directory, I risk causing that job to abort.\n\nEng1: So, we know that the client’s backups are in a quantum state, and direct observation risks collapse.",
  "I have an outstanding timesheet. I&rsquo;m saying nothing.",
  "Genuine question from my devs: Can we make our monitoring send an alert to Pagerduty which will tell GoCD to relaunch the failed service? My reply was basically &quot;Have you considered writing stuff that doesn&rsquo;t fall down once a day on average?",
  "Eng1 has the version of that laptop with the touch screen. Because it wouldn&rsquo;t be Eng1 without inappropriate touching.",
  "[Service] is doing my head in. Going to buy a hosepipe.\n\nTo clarify: that&rsquo;s not to go between the car exhaust and the window; it&rsquo;s to water the garden",
  "Morning all. It&rsquo;s 9am and I&rsquo;m already on my second moron of the day.",
  "I’m a DevOps, Jack, and I’m okay…\n\nMy prod deploys run every day.\n\nI parse my logs, I eat my lunch, I go to the lavatory.\n\nOn Wednesdays I do meetups and have artisanal, fair trade, vegan, gluten-free, scones for tea.",
  "Doing more things faster is no substitute for doing the right things.",
  "This all happened because some old dependencies were removed from artifactory yesterday. It is not like the platform is in continuously broken state",
  "&ldquo;As a Devops I want my chatops to have a physical and audio presence&rdquo;\n\n&ldquo;As a developer I want an obsolete plastic rabbit to swear at me so I know when I have been bad&rdquo;",
  "My dev team are taking a look at Jenkins 2 and considering dropping GoCD. More pointless busy work from the team that brought you &ldquo;I can&rsquo;t build a Kafka cluster&rdquo; and &ldquo;Databases are hard&rdquo;",
  "There&rsquo;s a bloke in our office wearing a backwards baseball cap and shorts. He&rsquo;s talking to a bloke in a hoody. Somehow I feel about a hundred years old.",
  "Today&rsquo;s task is one for you clickbait afficionados. &ldquo;How I deleted 84 million versioned objects from an S3 bucket with this one weird trick&rdquo;",
  "I just accidentally created (thanks Python!) a directory called ~\n\nSo I then had to run\n\nrm -rf \\~\n\nto get rid of it.\n\nJeeeeesus that made me nervous.\n\nMostly because I typed it, hit enter, and only then thought &ldquo;hey, that could be bad&hellip;&rdquo;",
  "That&rsquo;s a common reason to put Terraform state in git. In theory you can merge the state of your feature branch into the state of your production branch once you&rsquo;ve mangled them independently. In practice I reckon that&rsquo;s ripe for disaster without, at the very least, something to assert the JSON is at least semantically correct as a git hook.\n\nOr you can invoke the magic letters TCO and just pay the Hashicorp people who have solved the problem to give you their solution and get on with your life. But where&rsquo;s the fun in that?",
  "I&rsquo;m reading the new features list for Ubuntu 16.04 and &ldquo;New Default Wallpaper&rdquo; impressed me most, so far",
  "Looking into my queue issues more closely reveals the following fuckery: Dev estimates message size at 2k.  Ops checks disk, which is 20G, and puts in place a limit of 1 million messages.  Dev decides instead to use a new message, which is around 25k.  Dev also decides to run the enqueuing job first, see what happens, and then run the dequeueing job afterwards.  \n\nOddly enough, one million 25k messages is 25G, so the disk fills and it all falls over.  Dev apparently does not understand the &lsquo;queues&rsquo; are not 'magic infinite storage devices&rsquo;, but just disk space with access mediated by a computer program .",
  "On Agile/Scrum for Ops: Scrum aims to always deliver at the end of the sprint, even something incomplete. Are you happy to settle for &ldquo;some&rdquo; uptime? Are you punk?",
  "It&rsquo;s not a bug that stops things working. It&rsquo;s a feature flag.",
  "I&rsquo;m already in a bad mood because the train air con was on all the way to London. When I told the train company&rsquo;s twitter morons, they asked &ldquo;was it cold?&quot; Now they&rsquo;re telling me they can&rsquo;t fix it because I didn&rsquo;t note down the carriage number, only the train. I&rsquo;ve suggested they get someone to walk the length of the train till they find themselves going &quot;Oh, it&rsquo;s a bit parky in &lsquo;ere&rdquo;, and that&rsquo;ll be the broken carriage.",
  "Mmmmm - graphs with daily granularity. I can almost taste the lack of visibility of immediate issues.",
  "500 posts! Who&rsquo;d a thunk it?",
  "One of my engineers today&hellip;   (it&rsquo;s been a particularly shitty day for Ops)\n&ldquo;My father always told me you need to study son&hellip; or you gonna work with computers&rdquo;",
  "First thing Monday morning is not supposed to be &ldquo;throw your papers in the air, punch someone and storm out&rdquo; time",
  "&ldquo;The client are a widely known household name and have a requirement for a DevOps Engineer (Ops) and a DevOps Engineer (Dev).&rdquo; &lt;&ndash; is that how it works then, this DevOps thing? Kind of like a three-legged race? A job share? One person comes in in the mornings and does the Devs, then is replaced by the other, who does the Ops?",
  "It&rsquo;ll be great. An opportunity to spring clean all the things, clear up old webhooks, build jobs and code workflows. Deprecate old repos, refactor and improve. And of course it won&rsquo;t turn into a massive whinge-fest consisting of two broken processes and people screaming &ldquo;Where&rsquo;s my code gone!?!&rdquo;",
  "It&rsquo;s been postponed for now, due to unforeseen idiocy.",
  "Don&rsquo;t use the Puppet Nginx module. Add source of thing, get thing, tell thing what to do. Do not pass go, do not collect 500 lines of fuckery.",
  "Ubuntu userland is coming to Windows 10 - &quot;Hi, I see you&rsquo;re trying to write a shell script &hellip;📎&quot;",
  "Top tip - Control your laptop fans with Skype: Just break the platform, sign in after 3 days, and the fans magically come on full as it receives 1000+ messages.",
  "It&rsquo;s like having to deal with the antics of children who just happen to know how to use an IDE and the internet.",
  "With a bit of luck I should have a demo for you of an exciting scalable log aggregation system tied into our exciting scalable telemetry system. Plus Kibana. All run as a service for your hands-off delight. Be there and be square.",
  "We&rsquo;re out of tea bags. Send help.",
  "You know you’ve used linux more than google when typing ‘man pipe’ into the search bar doesn’t instantly seem like a bad idea.",
  "I&rsquo;ve just realised what the problem is. It&rsquo;s that file doesn&rsquo;t have an atime of +10 (ten or more, not counting fractions). Everything&rsquo;s working perfectly. I am clearly in need of coffee."
];

moment.updateLocale('en', {
    relativeTime : {
        future: "%s",
        past:   "%s",
        s:  "%ds",
        m:  "%dm",
        mm: "%dm",
        h:  "%dh",
        hh: "%dh",
        d:  "%dd",
        dd: "%dd",
        M:  "%dm",
        MM: "%dm",
        y:  "%dy",
        yy: "%dy"
    }
});

/**
 * Details
 */
var Details = React.createClass({
  render: function() {
    var known = [
      "HOSTNAME",
      "NOMAD_ADDR_http",
      "NOMAD_ALLOC_DIR",
      "NOMAD_ALLOC_ID",
      "NOMAD_ALLOC_INDEX",
      "NOMAD_ALLOC_NAME",
      "NOMAD_CPU_LIMIT",
      "NOMAD_HOST_PORT_http",
      "NOMAD_IP_http",
      "NOMAD_MEMORY_LIMIT",
      "NOMAD_PORT_http",
      "NOMAD_TASK_DIR",
      "NOMAD_TASK_NAME",

      // Self defined (attribute name . replaces with _ and uppercased)
      "NODE_UNIQUE_ID",
      "NODE_UNIQUE_NAME",
      "NODE_DATACENTER",
      "NODE_CLASS",
      "ATTR_ARCH",
      "ATTR_OS_NAME",
      "ATTR_OS_VERSION",
      "ATTR_KERNEL_NAME",
      "ATTR_KERNEL_VERSION",
      "ATTR_CPU_NUMCORES",
      "ATTR_HOSTNAME",
      "ATTR_DRIVER_DOCKER_VERSION"
    ];
    var variables = this.props.variables;
    var keys = Object.getOwnPropertyNames(variables);
    return (
      <div id="details">
        <div className="node">
          <table>
            <thead>Node</thead>
            <tbody>
              <tr>
                <td className="key">ID</td>
                <td className="value">{variables["NODE_UNIQUE_ID"]}</td>
              </tr>
              <tr>
                <td className="key">Hostname</td>
                <td className="value">{variables["NODE_UNIQUE_NAME"]}</td>
              </tr>
              <tr>
                <td className="key">Datacenter</td>
                <td className="value">{variables["NODE_DATACENTER"]}</td>
              </tr>
              <tr>
                <td className="key">OS</td>
                <td className="value">{variables["ATTR_OS_NAME"]} {variables["ATTR_OS_VERSION"]}</td>
              </tr>
              <tr>
                <td className="key">Kernel</td>
                <td className="value">{variables["ATTR_KERNEL_NAME"]} {variables["ATTR_KERNEL_VERSION"]}</td>
              </tr>
              <tr>
                <td className="key">Architecture</td>
                <td className="value">{variables["ATTR_ARCH"]}</td>
              </tr>
              <tr>
                <td colspan="2">&nbsp;</td>
              </tr>
              </tbody>
              <thead>Docker</thead>
              <tbody>
              <tr>
                <td className="key">ID</td>
                <td className="value">{variables["HOSTNAME"]}</td>
              </tr>
              <tr>
                <td className="key">Version</td>
                <td className="value">{variables["ATTR_DRIVER_DOCKER_VERSION"]}</td>
              </tr>
              <tr>
                <td colspan="2">&nbsp;</td>
              </tr>
            </tbody>
            <thead>Allocation</thead>
            <tbody>
              <tr>
                <td className="key">ID</td>
                <td className="value">{variables["NOMAD_ALLOC_ID"]}</td>
              </tr>
              <tr>
                <td className="key">Name</td>
                <td className="value">{variables["NOMAD_ALLOC_NAME"]}</td>
              </tr>
              <tr>
                <td className="key">CPU</td>
                <td className="value">{variables["NOMAD_CPU_LIMIT"]}</td>
              </tr>
              <tr>
                <td className="key">Memory</td>
                <td className="value">{variables["NOMAD_MEMORY_LIMIT"]}</td>
              </tr>
              <tr>
                <td className="key">Port</td>
                <td className="value">{variables["NOMAD_PORT_http"]}</td>
              </tr>
              <tr>
                <td className="key">Directory</td>
                <td className="value">{variables["NOMAD_ALLOC_DIR"]}</td>
              </tr>
              <tr>
                <td className="key">Task</td>
                <td className="value">{variables["NOMAD_TASK_NAME"]}</td>
              </tr>
              <tr>
                <td className="key">Local</td>
                <td className="value">{variables["NOMAD_TASK_DIR"]}</td>
              </tr>
              <tr>
                <td className="key">Address</td>
                <td className="value">{variables["NOMAD_ADDR_http"]}</td>
              </tr>
              <tr>
                <td colspan="2">&nbsp;</td>
              </tr>
            </tbody>
            <thead>Other</thead>
            <tbody>
            {keys.map(function(key, index) {
              var counter = 0;
              if(known.indexOf(key) == -1) {
                return (
                  <tr key={index}>
                    <td className="key">{key}</td>
                    <td className="value">{variables[key]}</td>
                  </tr>
                )
              }
            })}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
});

/**
 * Uptime
 */
var Uptime = React.createClass({
  formatUptime: function(timestamp) {
    var x = timestamp / 1000;
    var seconds = x % 60;
    x /= 60;
    var minutes = x % 60;
    x /= 60;
    var hours = x % 24;
    x /= 24;
    var days = x;

    return {
      hours: ('0' + Math.floor(hours)).substr(-2),
      minutes: ('0' + Math.floor(minutes)).substr(-2),
      seconds: ('0' + Math.floor(seconds)).substr(-2)
    }
  },
  render: function() {
    var uptime = this.formatUptime(Math.round((new Date().getTime() - this.props.start)));
    return (
      <div id="uptime">
        <i className="fa fa-fw fa-clock-o"></i> <span className="time">{uptime.hours}<span className="light-purple">h</span> {uptime.minutes}<span className="light-purple">m</span> {uptime.seconds}<span className="light-purple">s</span></span>
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
    var since = moment(message.timestamp).fromNow();
    var content = $('<textarea />').html(message.message).text();

    return (
      <li className="message">
          <div className="title">
            <span className="author">{message.author}</span> <span className="seperator">&middot;</span> <time className="timestamp">{since}</time>
          </div>
          <p className="content">{content}</p>
      </li>
    )
  }
});

/**
 * Message List
 */
var MessageList = React.createClass({
  render: function() {
    var messages = this.props.messages;
    if (messages.length > 0) {
      return (
        <div id="messages">
          <ul>
          {messages.map(function(message) {
            return <Message key={message.id} message={message}/>
          })}
          </ul>
        </div>
      )
    } else {
      return (
        <div id="messages">
          <p>No messages received from peers.</p>
        </div>
      )
    }
  }
});

/**
 * Environment
 */
var Environment = React.createClass({
  render: function() {
    var variables = this.props.variables;
    var keys = Object.getOwnPropertyNames(variables);
    return (
      <div id="environment">
        <table>
          <tbody>
          {keys.map(function(key, index) {
            var counter = 0;
            return (
              <tr key={index}>
                <td className="key">{key}</td>
                <td className="value">{variables[key]}</td>
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
    if(this.props.status == "on") {

    } else if(this.props.status == "pending") {
    } else {
    }
    return (
      <div id="killme" className={this.props.status}>
        <div className="tray" onClick={this.props.onClick}>
          <div className="switch"></div>
        </div>
      </div>
    )
  }
});

var Logo = React.createClass({
  render: function() {
    return (
      <div id="logo">
        <h1>PAAS</h1>
        <h2>Monitor</h2>
      </div>
    )
  }
});

/**
 * Header
 */
var Header = React.createClass({
  render: function() {
    return (
      <Logo/>
    )
  }
});

/**
 * Paas Monitor
 */
var PaasMonitor = React.createClass({
  getInitialState: function() {
    return {
      identifier: "",
      environment: {},
      status: "on",
      start: this.props.start
    };
  },

  kill: function() {
    this.setState({
      status: "off",
    });
    $.get("/kill");
  },

  revive: function() {
    this.setState({
      status: "pending"
    });

    // Retrying until alive.
    var self = this;
    var reboot = setInterval(function() {
      var checkHealth = $.get("/health", function (result) {
        if(result == "ok") {
          self.setState({
            status: "on",
            start: new Date().getTime()
          });
          clearInterval(reboot);
        }
      }.bind(this), "json");
    }, 5000);

  },

  render: function() {
    var powerButton;
    var mainContent;
    if (this.state.status == "on") {
      powerButton = <KillButton status={this.state.status} onClick={this.kill}/>
      mainContent = <div id="columns"><LeftColumn environment={this.props.environment} identifier={this.props.identifier}/><RightColumn messages={this.props.messages}/></div>
    } else if (this.state.status == "pending") {
      powerButton = <KillButton status={this.state.status} onClick={null}/>
      mainContent = <div id="dead">I'm resurrecting! ;O</div>
    } else {
      powerButton = <KillButton status={this.state.status} onClick={this.revive}/>
      mainContent = <div id="dead">I'm dead :(</div>
    }

    return (
      <div id="paasmonitor">
        <header>
          <Header/>
          <ul>
            <li><Uptime start={this.state.start}/></li>
            <li>{powerButton}</li>
          </ul>
        </header>
        {mainContent}
      </div>
    )
  }
});

var RightColumn = React.createClass({
  render: function() {
    return (
      <div id="right">
        <MessageList messages={this.props.messages}/>
      </div>
    )
  }
});

var LeftColumn = React.createClass({
  render: function() {
    return (
      <div id="left">
        <Details variables={this.props.environment}/>
      </div>
    )
  }
});

/**
 * Entrypoint
 */
var start = 0;
$.get("/uptime", function (result) {
  start = result;
}, "json");

var messages = [];
var environment = {};
var identifier = "";
setInterval(function() {
  // Fetch information if not dead.
  if(!document.getElementById('dead')) {
    // Fetch messages
    $.get("/messages", function(result) {
      messages = result.reverse();
    }, "json");

    // Fetch environment variables
    this.environmentRequest = $.get("/environment", function (result) {
      environment = result;
    }.bind(this), "json");

    // Fetch id
    this.idRequest = $.get("/id", function (result) {
      identifier = result
    }.bind(this), "json");
  }

  var app = ReactDOM.render(
    <PaasMonitor messages={messages} environment={environment} identifier={identifier} start={start}/>,
    document.getElementById('container')
  );
}, 250);


var id = 0;
setInterval(function() {
  if(!document.getElementById('dead')) {
    $.post("/send", JSON.stringify({
      id: "" + id++,
      timestamp: new Date().getTime(),
      author: identifier,
      message: quotes[Math.floor(Math.random() * quotes.length)]
    }), "json");
  }
}, 5000);
