import Link from "next/link";
import Image from "next/image";

const RecipeCard = ({ recipe }) => {
  const { title, slug, cookingTime, thumbnail } = recipe.fields;
  return (
    <div className="card">
      <div className="featured">
        <Image
          src={"https:" + thumbnail.fields.file.url}
          width={thumbnail.fields.file.details.image.width}
          height={thumbnail.fields.file.details.image.height}
          alt="recipe"
        />
      </div>
      <div className="content">
        <div className="info">
          <h4 className="title">{title}</h4>
          <p>Takes approx {cookingTime} mins</p>
        </div>
        <div className="actions">
          <Link href={`/recipes/${slug}`}>
            <a>Cooking time!</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
