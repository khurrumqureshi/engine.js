var util = require("util"),
    events = require("events"),
    engine = require("../engine").engine;

var mock = {};

mock.TASK_PAYLOAD = JSON.stringify({
    task_id: "1",
    context: "",
    code: "",
    locals: {}
});


mock.TASK_RESULTS = JSON.stringify({
    task_id: "1",
    last_eval: ""
});


//var mock_client = function(){};
//mock_client.prototype.run = function(){};
//mock.client = mock_client;
(function(){
    var klass = function(){};
    mock.client = klass;
})();


var mockSocket = function(){};
util.inherits(mockSocket, events.EventEmitter);
mockSocket.prototype.close = function(){};
mockSocket.prototype.send = function(){};
mockSocket.prototype.connect = function(){};
mockSocket.prototype.subscribe = function(){};
mockSocket.prototype.unsubscribe = function(){};
mockSocket.prototype.bind = function(endpoint, callback){
    setTimeout(callback, 500);
};
mockSocket.prototype.fakeSend = function(message){
    this.emit("message", message);
};

mock.socket = mockSocket;

var mock_task = function(){};
mock_task.prototype.getId = function(){};
mock_task.prototype.getContext = function(){};
mock_task.prototype.getLocals = function(){};
mock_task.prototype.getCode = function(){};
mock_task.prototype.on = function(){};
mock_task.prototype.emit = function(){};
mock_task.make = function(){};
mock.task = mock_task;

var stdout = function(){};
util.inherits(stdout, events.EventEmitter);
var stderr = function(){};
util.inherits(stderr, events.EventEmitter);

var child_process = function(){
    this.stdout = stdout;
    this.stderr = stderr;
};
util.inherits(child_process, events.EventEmitter);

child_process.prototype.kill = function(){};
mock.process = child_process;

var spawner = function(){};
spawner.prototype.spawn = function(){
    return new mock.process();
};
mock.process_spawner = spawner;

var mock_sandbox_generator = function(){};
mock_sandbox_generator.prototype.generate = function(){};
mock.sandbox_generator = mock_sandbox_generator;

var mock_execution_strategy = function(){};
mock_execution_strategy.prototype.execute = function(){};
mock.execution_strategy = mock_execution_strategy;

var mock_execution_watcher = function(){
    this.piston_process = new mock.process();
};
util.inherits(mock_execution_watcher, events.EventEmitter);
mock_execution_watcher.prototype.start = function(){};
mock_execution_watcher.prototype.clear = function(){};
mock.execution_watcher = mock_execution_watcher;

var mock_piston_server = function(){};
mock_piston_server.prototype.accept_request = function(){};
mock_piston_server.prototype.send_response = function(){};
mock_piston_server.prototype.close = function(){};
mock.piston_server = mock_piston_server;

var mock_logging_gateway = function(){};
mock_logging_gateway.prototype.log_message = function(){};
mock_logging_gateway.prototype.log = function(){};
mock.logging_gateway = mock_logging_gateway;

var mock_logging_client = function(){};
mock_logging_client.prototype.log = function(){};
mock.logging_client = mock_logging_client;

mock.log_message = function(){};

var mock_log_formatter = function(){};
mock_log_formatter.prototype.format = function(){};
mock.log_formatter = mock_log_formatter;

var mock_log_writer = function(){};
mock_log_writer.prototype.write = function(){};
mock.log_writer = mock_log_writer;

var mock_context_validator = function(){};
mock_context_validator.prototype.validate = function(){};
mock.context_validator = mock_context_validator;

var mock_client_task_receiver = function(){};
util.inherits(mock_client_task_receiver, events.EventEmitter);
mock_client_task_receiver.prototype.close = function(){};
mock.client_task_receiver = mock_client_task_receiver;

var mock_cylinder_task_sender = function(){};
mock_cylinder_task_sender.prototype.send_task = function(){};
mock_cylinder_task_sender.prototype.close = function(){};
mock.cylinder_task_sender = mock_cylinder_task_sender;

(function(){
    var klass = function(){};
    klass.prototype.generate = function(){};
    
    mock.task_identity_generator = klass;
})();

(function(){
    var klass = function(){};
    klass.prototype.translate = function(){};
    
    mock.task_translator = klass;
})();

(function(){
    var klass = function(){};
    klass.prototype.serialize = function(){};
    
    mock.task_serializer = klass;
})();

(function(){
    var klass = function(){};
    util.inherits(klass, events.EventEmitter);

    klass.prototype.close = function(){};

    mock.client_connection = klass;
})();

(function(){
    var klass = function(){};

    klass.prototype.send = function(){};
    klass.prototype.close = function(){};

    mock.cylinder_connection = klass;
})();


(function(){
    var klass = function(){};
    util.inherits(klass, events.EventEmitter);
    
    klass.prototype.close = function(){};
    klass.prototype.send = function(){};

    mock.zmq_socket = klass;
})();



exports.mock = mock;