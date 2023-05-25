export function validationSubtitleAnime(episodeos: number, isManga: boolean) {
  const subtitleText = isManga ? "Capítulos" : "Episodeos";

  return episodeos === null ? "Em lançamento" : `${episodeos} ${subtitleText}`;
}
