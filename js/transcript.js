document.getElementById('transcribe').onclick = function () {
    const placeholderText = "Sally: Good morning how are you doing? Patient: Good Sally: Good, can you tell me your first and last name? Patient: My first name is John and my last name is Doe Sally: I see that the patient's  Oxigen level  in blood is 120. Sally: I'm looking at the patient's pupils and they look and equal. Do you have any shortness of breath Patient: No"
    document.getElementById('transcription').innerHTML = placeholderText
}