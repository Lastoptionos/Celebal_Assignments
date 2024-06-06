# Celebal_Assignments

**Understand the Basics of Node.js Runtime**
Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows you to run JavaScript on the server side. Here are some key points:

1] Event-driven architecture: Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient.
2] Asynchronous I/O: Most of Node.js's core modules are designed to use asynchronous methods to improve performance.
3] Single-threaded: Although Node.js operates on a single thread, it can handle many connections simultaneously thanks to its event-driven architecture.

The code above creates an HTTP server using the http module, which is one of the built-in modules in Node.js. When a request is received, the callback function (passed to createServer) is executed, sending back a "Hello, World!" message.
