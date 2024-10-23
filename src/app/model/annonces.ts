export class Annonce{
    id: number;
    titre: string; // Titre de l'annonce
    description: string; // Détails supplémentaires sur le bien
    typeBien: "Appartement" | "Maison" | "Terrain" | "Bureau" | "Local commercial"; // Type de bien
    prix: number; // Prix en euros
    adresse: string; // Localisation du bien
    surface: number; // Surface en m²
    image: string;
}