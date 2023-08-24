import { Client, Account } from 'appwrite';

const client = new Client();

client
    .setEndpoint(import.meta.env.VITE_SET_ENDPOINT)
    .setProject(import.meta.env.VITE_SET_PROJECT);

export const account = new Account(client)

export default client