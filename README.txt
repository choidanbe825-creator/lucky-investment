🍀 행운의 투자왕 — 설치 안내 (2026-10-29)

파일 구성: index.html(학생), admin.html(교사), style.css, config.js, common.js, firestore.rules

1. GitHub 저장소 lucky-investment의 최상위(root)에 ZIP을 풀어 나온 파일 6개를 업로드합니다. ZIP 자체를 업로드하지 않습니다.
2. Settings → Pages → Deploy from a branch → main / (root) → Save.
   학생용: https://choidanbe825-creator.github.io/lucky-investment/
   교사용: https://choidanbe825-creator.github.io/lucky-investment/admin.html
3. Firebase 새 프로젝트 → 웹 앱 등록 → 웹 앱 설정(firebaseConfig)을 config.js에 입력합니다.
4. Authentication → Sign-in method: Anonymous(학생), Email/Password(교사) 활성화.
   Authentication → Settings → Authorized domains에서 GitHub Pages 도메인을 허용합니다.
5. Firestore Database 생성 → Rules 탭에서 firestore.rules 전체 내용을 붙여넣고 Publish.
6. Authentication → Users에서 교사 이메일/비밀번호 계정을 생성하고 UID를 복사합니다.
   Firestore → investAdmins 컬렉션 → 문서 ID를 교사 UID로 생성 → enabled (boolean) true 필드 추가.
7. Firestore → investMeta 컬렉션 → session 문서 생성: round(number)=0, phase(string)=waiting.
8. 교사용 관리자 화면에 로그인하여 1라운드 시작. 학생들이 각자 번호(1~14, 51~60)와 이름을 입력하고 참여합니다.

중요:
- 학생 정원은 21명. 번호 선택지는 24개이며 실제 결번은 제외하지 않아도 됩니다.
- 등록 번호 중복 방지를 위해 investNumbers 컬렉션을 사용합니다. 번호 중복 등록을 막지만, 다른 사람 번호를 먼저 선점하는 행위까지 인증하지는 못합니다. 학생 번호 확인은 교사가 지도해 주세요.
- 학생 익명 인증은 브라우저/기기별로 유지됩니다. 다른 기기로 바꾸거나 브라우저 데이터를 삭제하면 원래 등록번호로 다시 접속하기 어려울 수 있습니다.
- 실수로 잘못 등록한 학생을 초기화하려면 investStudents/{학생UID}와 investNumbers/{번호} 두 문서를 관리자 권한으로 함께 삭제하고, 해당 기기 브라우저 데이터도 초기화해야 할 수 있습니다.
- 공개 저장소에 교사 비밀번호, Firebase 서비스 계정 비밀키를 절대 업로드하지 마세요. Firebase 웹 설정(firebaseConfig)은 비밀번호가 아닙니다.
- 3개 라운드 각각 새로운 100만 원. 이전 수익은 재투자하지 않음.
- 제출 확정 전 수정 가능, 확정 후 수정 불가. 학생은 교사 결과 공개 시 자동 갱신.
- 실제 학생 정보를 입력하기 전에 교사와 테스트 학생 계정으로 동작을 확인하세요.
- 수업 전 21명 동시 접속과 데이터 권한 테스트가 필요합니다.
