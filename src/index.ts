export interface Env {

}

export default {
	async fetch(request, env, ctx): Promise<Response> {
		console.log(request.body);
		console.log(request.headers);
		
		if (request.method == "GET") {
			return Response.json({
				msg : "you sent a get request"
			})
		} else {
			return Response.json({
				msg : "you did not sent a get request"
			})
			
		}
	},
} satisfies ExportedHandler<Env>;
