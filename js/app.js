const App=React.createClass({
   getInitialState:function () {
     return{
         elements:[],
         isEditor:true
     }
   },

    toggle:function () {
      this.setState({isEditor:!this.state.isEditor});
    },

    addElement:function (element) {
      const elements=this.state.elements;
        elements.push(element);
        this.setState({elements});
    },

    deleteElement:function (index) {
        const elements=this.state.elements;
        elements.splice(index,1);
        this.setState({elements});
    },

    render:function () {
       const isEditor=this.state.isEditor;
       return <div>
           <button onClick={this.toggle}>{isEditor?'Preview':'Editor'}</button>
           <div>
               <Editor elements={this.state.elements} onAdd={this.addElement} onDelete={this.deleteElement}/>
           </div>
           <div>
               <Previewer elements={this.state.elements}/>
           </div>
       </div>
   }
});

const Editor = React.createClass({
   render:function () {
       return <div>
           <Left elements={this.props.elements} onDelete={this.props.onDelete}/>
           <Right onAdd={this.props.onAdd}/>
       </div>
   }
});

const Left = React.createClass({
   render:function () {
       return <div></div>
   }
});

const Right=React.createClass({
    add:function () {
      const element =$("input[name=element]:checked").val();
        this.props.onAdd(element);
        console.log(element);
    },
    render:function () {
        return<div>
            <input type="radio" name="element" value='text' />Text
            <input type="radio" name="element" value='date' />Date
            <button onClick={this.add}>+</button>
        </div>
    }
});

const Previewer = React.createClass({
   render:function () {
       return<div></div>
   }
});

ReactDOM.render(<App />,document.getElementById('content'));