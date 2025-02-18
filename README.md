# Node.js Server Crash: Handling Large Request Bodies

This repository demonstrates a common issue in Node.js servers: crashing due to large request bodies. The `bug.js` file contains code that will crash the server if a request body exceeds the default memory limit.  The `bugSolution.js` file provides a solution using streams to handle arbitrarily large requests.

## Problem

The problem lies in directly accumulating the request body into memory using `req.on('data', chunk => body.push(chunk))`. This approach will eventually lead to a memory overflow if the request is large enough.

## Solution

The solution involves using streams to process the request body incrementally. This prevents the entire body from being loaded into memory at once.  This solution uses the `stream.pipeline` function for more efficient and robust handling of data streams.