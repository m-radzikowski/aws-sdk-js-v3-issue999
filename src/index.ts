import {ApiGatewayManagementApiClient, PostToConnectionCommand} from "@aws-sdk/client-apigatewaymanagementapi";

export const handler = async (event: any): Promise<void> => {
    console.log(event);

    const apiGatewayManagementApi = new ApiGatewayManagementApiClient({
        apiVersion: '2018-11-29',
        endpoint: event.requestContext.domainName + '/' + event.requestContext.stage,
    });

    await apiGatewayManagementApi.send(new PostToConnectionCommand({
        // @ts-ignore
        Data: 'hello from lambda!',
        ConnectionId: event.requestContext.connectionId!,
    }));
};
