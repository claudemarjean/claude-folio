import { supabase } from "@/lib/supabaseClient";

export async function trackVisit() {
  try {
    const userAgent = navigator.userAgent;
    const deviceType = /mobile/i.test(userAgent) ? "mobile" : "desktop";
    const page = window.location.pathname;
    const timestamp = new Date().toISOString();

    // Récupérer les infos du visiteur
    const res = await fetch("https://ipapi.co/json/");
    const data = await res.json();

    // Construire ton objet d'information
    const info = {
      date: timestamp,
      ip: data.ip || null,
      country: data.country_name || null,
      region: data.region || null,
      city: data.city || null,
      device: deviceType,
      browser: userAgent,
      page,
    };

    // Convertir en JSON (texte)
    const jsonInfo = JSON.stringify(info);

    // Insérer dans ta table "consultation"
    const { error } = await supabase.from("consultation").insert([
      { cons_information: jsonInfo },
    ]);

    if (error) console.error(" Erreur d’enregistrement :", error);
  } catch (err) {
    console.error(" Erreur lors du tracking :", err);
  }
}
