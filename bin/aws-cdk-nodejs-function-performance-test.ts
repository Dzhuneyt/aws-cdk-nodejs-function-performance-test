#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import {AwsCdkNodejsFunctionPerformanceTestStack} from '../lib/aws-cdk-nodejs-function-performance-test-stack';

const app = new cdk.App();
new AwsCdkNodejsFunctionPerformanceTestStack(app, 'AwsCdkNodejsFunctionPerformanceTestStack');