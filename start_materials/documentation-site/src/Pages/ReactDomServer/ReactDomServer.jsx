function ReactDomServer(){
    return(
        <div className="Main">
            <h2>React Dom Server</h2>
            <p>Render a React element to its initial HTML. Returns a stream with a pipe(res) method to pipe the output and abort to abort the request. Fully supports Suspense and streaming of HTML with “delayed” content blocks “popping in” via inline script tags later. Read more

            If you call ReactDOM.hydrateRoot on a node that already has this server-rendered markup, React will preserve it and only attach event handlers, allowing you to have a very performant first-load experience.
            </p>
        </div>
    );
}

export default ReactDomServer;