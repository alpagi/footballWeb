// Haber verisi için arayüz
export interface NewsItem {
  id: number;
  title: string;
  content: string;
  category: string;
  date: string;
  author: string;
  image: string;
  tags: string[];
}

// Merkezi haber veritabanı
export const newsData: NewsItem[] = [
  {
    id: 1,
    title: "Signs of Arsenal getting stronger in the Premier League",
    content:
      "The victory over Wolves provided a comfortable distance for Arsenal at the top of the Premier League table. Mikel Arteta's squad continues to impress with their solid performance both offensively and defensively. The Gunners have shown tremendous improvement compared to previous seasons, with young talents like Bukayo Saka and Gabriel Martinelli stepping up alongside experienced players. Arsenal fans are increasingly optimistic about their chances to challenge for the title this season.",
    category: "PREMIER LEAGUE",
    date: "12 Nov 2022",
    author: "John Smith",
    image:
      "https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg",
    tags: ["Arsenal", "Premier League", "Mikel Arteta", "Title Race", "Wolves"]
  },
  {
    id: 2,
    title: "Erling Haaland Leads Premier League Top Scorers 2022",
    content:
      "Until the competition break in facing the 2022 World Cup in Qatar, Haaland has dominated the Premier League top scorers. The Norwegian striker has been nothing short of phenomenal since joining Manchester City, breaking numerous records in his debut season. His incredible goal-scoring prowess has left fans and pundits alike in awe, with many wondering if he'll break the Premier League single-season goal record. Pep Guardiola has praised Haaland's work ethic and ability to adapt quickly to the Premier League's intensity.",
    category: "PREMIER LEAGUE",
    date: "10 Nov 2022",
    author: "Sarah Johnson",
    image: "https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg",
    tags: ["Erling Haaland", "Manchester City", "Top Scorer", "Premier League", "Pep Guardiola"]
  },
  {
    id: 3,
    title: "Chelsea were humiliated 1-4 at Brighton headquarters",
    content:
      "Chelsea were humiliated by losing with a big score of 1-4 when they visited Brighton headquarters in the Premier League. This defeat came as a shock to many, especially considering Chelsea's recent form under their new manager. Brighton, on the other hand, executed their game plan to perfection, taking advantage of Chelsea's defensive vulnerabilities. This result raises questions about Chelsea's consistency and their ability to maintain performance levels throughout the season. The Blues will need to regroup quickly if they hope to stay in contention for Champions League spots.",
    category: "PREMIER LEAGUE",
    date: "9 Nov 2022",
    author: "Michael Brown",
    image: "https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg",
    tags: ["Chelsea", "Brighton", "Premier League", "Defeat", "Champions League"]
  },
  {
    id: 4,
    title: "Garnacho led Manchester United to beat Fulham",
    content:
      "Midfielder Christian Eriksen not only put United ahead in the 14th minute but also set up Garnacho for the winning goal. The young Argentine winger has been a revelation for Manchester United, showcasing his talent and determination whenever given the opportunity. Erik ten Hag has praised Garnacho's development, noting his improved decision-making and work rate in recent weeks. This victory against Fulham was crucial for United's position in the league table, keeping them in touch with the top four contenders.",
    category: "PREMIER LEAGUE",
    date: "8 Nov 2022",
    author: "David Wilson",
    image: "https://images.pexels.com/photos/9397806/pexels-photo-9397806.jpeg",
    tags: ["Manchester United", "Garnacho", "Fulham", "Premier League", "Erik ten Hag", "Christian Eriksen"]
  },
  {
    id: 5,
    title: "Liverpool back to winning ways after dominant Newcastle display",
    content:
      "Liverpool returned to winning ways with a commanding 3-0 victory over Newcastle United at Anfield. The Reds showcased their attacking prowess as Mohamed Salah scored twice and Trent Alexander-Arnold delivered a masterclass in playmaking from the right-back position. Jürgen Klopp's side controlled the game from start to finish, with Newcastle struggling to create meaningful chances. This result puts Liverpool back in the conversation for a top-four finish after a period of inconsistent performances.",
    category: "PREMIER LEAGUE",
    date: "7 Nov 2022",
    author: "Emma Roberts",
    image: "https://images.pexels.com/photos/1667583/pexels-photo-1667583.jpeg",
    tags: ["Liverpool", "Newcastle", "Premier League", "Mohamed Salah", "Jürgen Klopp", "Anfield"]
  },
  {
    id: 6,
    title: "Tottenham's Kane reaches 200 Premier League goal milestone",
    content:
      "Harry Kane has become only the third player in Premier League history to score 200 goals, joining Alan Shearer and Wayne Rooney in this exclusive club. The England captain reached the milestone with a characteristic finish against Everton, cementing his legacy as one of the greatest strikers the league has ever seen. With Kane still in his prime years, there's speculation about whether he could eventually break Shearer's all-time record of 260 Premier League goals. Antonio Conte praised Kane's professionalism and dedication to continually improving his game.",
    category: "PREMIER LEAGUE",
    date: "6 Nov 2022",
    author: "James Anderson",
    image:
      "https://images.pexels.com/photos/47730/the-ball-stadion-football-the-pitch-47730.jpeg",
    tags: ["Tottenham", "Harry Kane", "Premier League", "Record", "Milestone", "Antonio Conte"]
  },
];

// Etiketlere göre ilgili haberleri bulma fonksiyonu
export function getRelatedNewsByTags(newsId: number, maxResults: number = 3): NewsItem[] {
  // Aranan haberi bul
  const currentNews = newsData.find(news => news.id === newsId);
  
  if (!currentNews) return [];
  
  // Diğer haberleri etiket eşleşmelerine göre filtreleme ve puanlama
  const scoredNews = newsData
    .filter(news => news.id !== newsId) // Mevcut haberi hariç tut
    .map(news => {
      // Her eşleşen etiket için bir puan ver
      const matchingTags = news.tags.filter(tag => currentNews.tags.includes(tag));
      return {
        news,
        score: matchingTags.length
      };
    })
    .filter(item => item.score > 0) // Etiket eşleşmesi olmayanları filtrele
    .sort((a, b) => b.score - a.score) // Skora göre sırala (yüksekten düşüğe)
    .slice(0, maxResults) // Maksimum sonuçları sınırla
    .map(item => item.news); // Sadece haber nesnesini döndür
  
  return scoredNews;
} 