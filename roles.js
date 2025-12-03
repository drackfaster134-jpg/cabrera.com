// Verificar si hay usuario logueado
firebase.auth().onAuthStateChanged(async (user) => {
    if (!user) {
        // Si no está logueado → mandarlo al login
        window.location.href = "login.html";
        return;
    }

    // Consultar si es admin
    const doc = await firebase.firestore().collection("config").doc("admins").get();
    const listaAdmins = doc.data().lista;
    const admin = listaAdmins.includes(user.email);

    // Guardar rol
    localStorage.setItem("rol", admin ? "admin" : "visitante");
});
