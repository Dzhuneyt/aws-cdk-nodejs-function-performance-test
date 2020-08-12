import * as cdk from '@aws-cdk/core';
import {NodejsFunction} from "@aws-cdk/aws-lambda-nodejs";
import * as path from 'path';
import * as lambda from '@aws-cdk/aws-lambda';

export class AwsCdkNodejsFunctionPerformanceTestStack extends cdk.Stack {
    constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        for (let i = 0; i <= 10; i++) {
            if (process.env.TYPESCRIPT) {
                new NodejsFunction(this, 'ts-' + i, {
                    entry: path.resolve(__dirname, './../lambda/ts/index.ts'),
                    handler: 'handler',
                    runtime: lambda.Runtime.NODEJS_12_X,
                });
            } else {
                new lambda.Function(this, 'js-' + i, {
                    handler: "handler",
                    runtime: lambda.Runtime.NODEJS_12_X,
                    code: lambda.Code.fromAsset(path.resolve(__dirname, './../lambda/js'))
                });
            }
        }

    }

}
