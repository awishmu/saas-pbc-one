import { NextRequest, NextResponse } from 'next/server';
// import { dbConnectionStatus } from "@/db/dbConnect";
import { MongoClient } from "mongodb";

export async function POST(request) {
	// MongoClient
	const client = new MongoClient(process.env.MONGODB_URI);

	try {
		// Parse the incoming JSON data
		const body = await request.json()
		
		// Example: Process the data
		const { name, email } = body;
		
		// client connectdb
		await client.connect();

        // Choose a name for your database
       const database = client.db("pbc-saas");
		// name for collection
		const collection = database.collection("users");
		await collection.insertOne( body );		

		console.log('body request :', body)
		// Respond with a success message
		return new Response(
			JSON.stringify({ message: `Hello, ${name}! Your email is ${email}.`}),
			{ status: 200, headers: { 'Content-Type': 'application/json' } }			
		);
	} catch (error) {
		// Handle errors
		return new Response(
			JSON.stringify({ error: 'Invalid request' }),
			{ status: 400, headers: { 'Content-Type': 'application/json' }}
		)
	} 
}