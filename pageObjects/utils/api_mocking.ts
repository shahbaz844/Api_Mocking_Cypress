export class ApiMock {

	interceptResponse() {
		cy.intercept({
				method: 'GET',
				url: 'https://production-server.onoffapp.net/mobile/v4/retrieve-threads?&limit=50'
			},
			{
				statusCode: 200,
				body: []

			}).as("mockedResponse")
	}

}