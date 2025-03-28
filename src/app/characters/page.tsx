async function CharactersPage() {
  await new Promise((resolve) => {
    return setTimeout(resolve, 3000);
  });
  //needs an async function
  return (
    <div>
      <p>List of Characters</p>
    </div>
  );
}

export default CharactersPage;
