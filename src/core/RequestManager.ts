/// RequestManager.ts is a class that manages API requests using Playwright's APIRequestContext.
/// It provides methods for making GET, POST, PUT, and DELETE requests to specified endpoints with optional headers and data.

// The class is initialized with an instance of APIRequestContext, which is used to perform the actual HTTP requests.
// Each method (get, post, put, delete) takes an endpoint and optional headers and data, 
// and returns the response from the API request.

//APIRequestContext is a interface provided by Playwright that allows us to make HTTP requests in our tests.
// It provides methods for making GET, POST, PUT, and DELETE requests, among others. By using this interface, 
// we can easily manage our API requests and handle responses in a consistent way across our test suite.
// The RequestManager class abstracts away the details of making API requests, allowing us to focus on writing tests 
// that interact with our API without worrying about the underlying implementation of the requests. 
// This makes our test code cleaner and more maintainable.

import { APIRequestContext } from "@playwright/test";
import { ENV } from "../config/env";

export class RequestManager {
    
    private readonly baseUrl: string = ENV.base_url;
    
    private request: APIRequestContext;
    
    /// Constructor initializes the RequestManager with an APIRequestContext instance.
    /// APIRequestContext is a Playwright interface that provides methods for making HTTP requests.
    /// We use it here to store and reuse the same request context across all HTTP method calls (get, post, put, delete),
    /// ensuring consistent request handling and allowing us to manage API requests efficiently throughout the test lifecycle.
    constructor(request: APIRequestContext) {
        this.request = request;
    }

    /// The get method sends an HTTP GET request to the specified endpoint.
    /// A GET request is used to retrieve data from the server without modifying anything.
    /// Parameters: endpoint (the URL to send the request to) and optional headers (custom HTTP headers to include).
    /// Returns: The response from the server containing the requested data.
    async getCall(endpoint: string, headers?: Record<string, string>) {
        return this.request.get(`${this.baseUrl}${endpoint}`, { headers });
    }

    /// The post method sends an HTTP POST request to the specified endpoint with data.
    /// A POST request is used to send new data to the server (like creating a new record).
    /// Parameters: endpoint (the URL to send the request to), data (the information to send), and optional headers (custom HTTP headers).
    /// Returns: The response from the server, typically confirming the data was received and processed.
    async postCall<T>(endpoint:string, data: T, headers?: Record<string, string>) {
        return this.request.post(`${this.baseUrl}${endpoint}`, { data, headers });
    }

    /// The put method sends an HTTP PUT request to the specified endpoint with data.
    /// A PUT request is used to update existing data on the server (like modifying a record).
    /// Parameters: endpoint (the URL to send the request to), data (the updated information), and optional headers (custom HTTP headers).
    /// Returns: The response from the server, typically confirming the data was successfully updated.
    async putCall<T>(endpoint:string, data: T, headers?: Record<string, string>) {
        return this.request.put(`${this.baseUrl}${endpoint}`, { data, headers });
    }

    /// The delete method sends an HTTP DELETE request to the specified endpoint.
    /// A DELETE request is used to remove data from the server (like deleting a record).
    /// Parameters: endpoint (the URL to send the request to) and optional headers (custom HTTP headers to include).
    /// Returns: The response from the server, typically confirming the data was successfully deleted.
    async deleteCall(endpoint:string, headers?: Record<string, string>) {
        return this.request.delete(`${this.baseUrl}${endpoint}`, { headers });
    }

}

