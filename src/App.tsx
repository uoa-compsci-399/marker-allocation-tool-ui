import Example from './components/common-ui/example';

function App(): JSX.Element {
  return (
    <div className="flex max-w-full font-sans">
      <div className="grid max-w-full m-auto my-14">
        <div className="grid row-span-1 gap-4 my-5">
            <Example title={"example 1"} description={"Provident similique accusantium nemo autem. Veritatis"}/>
            <Example title={"example 2"} description={"Quo neque error repudiandae fuga? Ipsa laudantium molestias eos"}/>
        </div>
      </div>
    </div>
  )
}

export default App;
