import {test, expect} from '@playwright/test';
import { PostResponse } from '../../src/models/responses/PostResponse';

test("explore response",async ({request})=>{

    const response = await request.get("https://jsonplaceholder.typicode.com/posts/1");

    const body = await response.json() as PostResponse;
    console.log("Body as JSON: ",body);
    console.log("ID: ",body.id);
    console.log("Title: ",body.title);
    console.log("Body: ",body.body);
    console.log("User ID: ",body.userId);

    
})