import {test, expect} from '@playwright/test';
import {RequestManager} from '../../src/core/RequestManager';
import {PostClient} from '../../src/clients/PostClient';
import { PostResponse } from '../../src/models/responses/PostResponse';

test('PostClient Smoke Tests',  async ({ request }) => {
    const requestManager = new RequestManager(request);
    const postClient = new PostClient(requestManager);
    const response = await postClient.getPostById(1);
    //validation 

    expect(response.status()).toBe(200);

    //convert responce body 

    const respBody =
        await  response.json() as PostResponse;

    console.log(respBody);

    expect(respBody).toHaveProperty('id');
});