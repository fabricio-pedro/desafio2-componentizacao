
export function  Header(props:{title:string}){
    return (
        <header>
        <span className="category">Categoria:<span> {props.title}</span></span>
       </header>

    );
}