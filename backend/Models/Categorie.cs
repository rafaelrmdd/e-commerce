public class Categorie
{
    public int Id { get; set; }
    public string Name { get; set; }

    public Categorie(string name)
    {
        Name = name;
    }
}