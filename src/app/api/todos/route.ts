import { NextResponse } from "next/server";

export async function GET(request: Request) {
  //we are moking a query to our database. Here we could insert our TodoModel.find()
  console.log("secret in Server :>> ", process.env.SECRET);
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todos = await response.json();

  //   return Response.json(
  //     {
  //       message: "list of todos",
  //       number: todos.length,
  //       todos,
  //     },
  //     { status: 200 }
  //   );
  // browser: localhost:3000/api/todos -> we created an endpoint from an api

  // here we want to get just 1 single to do by id - we need a different route, because we cannot create to functions in the same file
  // we would have to create another folder inside of api - todosid -> in the function in the request we will receive the id for the id and we will send it back

  return NextResponse.json(
    {
      message: "list of todos",
      number: todos.length,
      todos,
    },
    { status: 200 }
  );
}
