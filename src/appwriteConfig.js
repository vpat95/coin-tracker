import { Client, Account } from 'appwrite';

const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('64dd3f2a6f26e2449d3e');

export const account = new Account(client)

export default client