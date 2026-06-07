import {RequestManager} from "../core/RequestManager";

export class PostClient {
    private requestManager: RequestManager;

    constructor(requestManager: RequestManager) {
        this.requestManager = requestManager;
    }
    

// The getPost method retrieves a post by its ID.
// It sends a GET request to the endpoint /posts/{id} and returns the response.
// Parameters: id (the unique identifier of the post to retrieve).
// Returns: The response from the server containing the post data.
    async getPostById(id: number) {
        return this.requestManager.getCall(`/posts/${id}`);
    }

    
}