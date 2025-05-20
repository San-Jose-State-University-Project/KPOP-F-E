# 🎵 API 명세서

## 📘 요약 테이블

| 이름              | 메서드 | 경로              | 요청 파라미터 (Body)                  | 응답 모델                  | 설명                            |
|-------------------|--------|-------------------|----------------------------------------|----------------------------|----------------------------------|
| 가사 조회         | POST   | `/lyrics`         | `artist`: 문자열<br>`song`: 문자열    | `artist`: 문자열<br>`song`: 문자열<br>`lyrics`: 문자열 | 아티스트와 곡 이름으로 가사 조회 |
| 아티스트 정보 조회 | POST   | `/artist/info`    | `artist_name`: 문자열                 | `artist_name`: 문자열<br>`genres`: 문자열 리스트<br>`followers`: 정수<br>`popularity`: 정수<br>`top_tracks`: 트랙 리스트 | 아티스트 정보 및 상위 트랙 반환  |
| 아티스트 검색      | POST   | `/artist/search`  | `artist_name`: 문자열                 | `results`: 아티스트 리스트<br>(`artist_name`, `followers`, `popularity`) | 아티스트 검색 결과 인기순 정렬  |

---

## 📥 요청/응답 예시

### 📤 `/lyrics` 응답 예시
\`\`\`json
{
"artist": "Adele",
"song": "Hello",
"lyrics": "Hello, it's me..."
}
\`\`\`

### 📤 `/artist/info` 응답 예시
\`\`\`json
{
"artist_name": "Adele",
"genres": ["pop", "soul"],
"followers": 10000000,
"popularity": 90,
"top_tracks": [
{
"track_name": "Hello",
"artist_name": "Adele",
"album_name": "25",
"track_id": "123abc"
}
]
}
\`\`\`

### 📤 `/artist/search` 응답 예시
\`\`\`json
{
"results": [
{
"artist_name": "Adele",
"followers": 10000000,
"popularity": 90
}
]
}
\`\`\`