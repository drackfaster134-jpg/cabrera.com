firebase.auth().onAuthStateChanged(async (user) => {
    if (!user) {
        window.location.href = "login.html";
        return;
    }

    const doc = await firebase.firestore().collection("config").doc("admins").get();
    const listaAdmins = doc.data().lista || [];
    const admin = listaAdmins.includes(user.email);

    localStorage.setItem("rol", admin ? "admin" : "visitante");
});
