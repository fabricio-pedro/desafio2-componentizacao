import { Button } from "./Button";
import "../styles/button.scss";
import "../styles/sidebar.scss";
import { GenreResponseProps } from "./props/GenreResponseProps";

export function SideBar(props:{genres:GenreResponseProps[],callback:Function,selectedGenreId:number}) {
return (<nav className="sidebar">
<span>Watch<p>Me</p></span>

<div className="buttons-container">
  {props.genres.map(genre => (
    <Button
      key={String(genre.id)}
      title={genre.title}
      iconName={genre.name}
      onClick={() => props.callback(genre.id)}
      selected={props.selectedGenreId === genre.id}
    />
  ))}
</div>

</nav>
);
}