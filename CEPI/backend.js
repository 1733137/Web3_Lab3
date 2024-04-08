

app.post('/submit-form', async (req, res) => {
    try {
        const { titre, auteur, datePublication, contenu } = req.body; // Use lowercase names
        if (!titre || !auteur || !datePublication || !contenu) {
            return res.status(400).json({ error: 'Tous les champs sont requis' });
        }
        // Mettre en majuscule pour la BD
        const blogData = {
            Titre: titre,
            Auteur: auteur,
            DatePublication: datePublication,
            Contenu: contenu
        };

        // Envoyer a l'API
        const response = await fetch(apiEndpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(blogData)
        });

        // Check si ca a marché
        if (response.ok) {
            const newBlogPost = await response.json();
            return res.status(201).json(newBlogPost);
        } else {
            throw new Error('Échec');
        }
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({ error: 'Erreur Serveur' });
    }
});