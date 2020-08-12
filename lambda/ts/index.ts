import * as AWS from 'aws-sdk';
import {DynamoDB} from "aws-sdk";

export const handler = (event: any) => {
    console.log(event);
    const dynamo = new DynamoDB();
}