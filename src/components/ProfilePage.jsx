import {Card, Container, Row, Col} from 'react-bootstrap';

function ProfilePage() {
    return (<Container className="mt-5 GowunDodum-Regular">
        <Row className="justify-content-center">
            <Col md={8}>
                <Card className="text-center">
                    <Card.Img
                        variant="top"
                        src="/logo.png"
                        alt="Instructor"
                        className="rounded-circle mt-3"
                        style={{width: '150px', height: '150px', objectFit: 'cover', margin: '0 auto'}}
                    />
                    <Card.Body>
                        <Card.Title>Martin Kim</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">개발하는 꼬망이의 운영자</Card.Subtitle>
                    </Card.Body>
                </Card>
            </Col>
        </Row>

        <Row className="mt-2 justify-content-center">
            <Col md={8} xs={12}>
                <Card style={{width: '100%', border: 'none'}}>
                    <Card.Body>Captain of Martin Island, The Educational System for AI·SW</Card.Body>
                    <Card.Body>학부 학술지원 장학생(2023.09 ~ 2024.07)</Card.Body>
                    <Card.Body>학부생 연구형 인턴쉽 장학생(2024학년도 1학기, 2학기)</Card.Body>
                    <Card.Body>성적 우수 및 SW 중심대학 장학생(총 9회)</Card.Body>
                    <Card.Body>자율형 사립고등학교인 모교에서의 대회 수상(창의력 대회, SW 공모대회, SW 교육
                        컨텐츠 대회 등) 이력과 학생부 종합전형 대비 중심의 학교 생활 경험을 바탕으로 현재까지도
                        많은 중·고등학생의 교내/외 대회 및 수행평가 관련 지도 활동을 하고 있습니다.</Card.Body>
                    <Card.Body>2019년도부터 약 3년간 대치동 소재의 진학입시교육학원에서 입시 전문 선생님으로
                        재직하며 생활기록부 관련 지도와 자기소개서 첨삭, 학생부 종합전형 면접 수업 진행 등 여러
                        대입 관련 업무를 도맡아 왔습니다.</Card.Body>
                    <Card.Body>소프트웨어 및 인공지능(AI)을 전공하였으며, 금융공학 관련 데이터 분석 연구실
                        (Financial Data Science Lab.) 에서의 석사 연구 활동과 더불어 애플리케이션, 웹
                        등의 IT 플랫폼 탐구·개발 자율동아리를 창설하여 운영하고 있습니다.</Card.Body>
                    <Card.Body>SW 중심대학 대학혁신사업의 일환으로 운영되는 MIT APP Inventer/Arduino
                        Creative Camp의 운영·교육 조교로 임명되어 SW 수업 및 교육 자료 제작 업무를 담당하였습니다.
                        초·중·고 소프트웨어/인공지능 교육을 위해 교육부와 17개 시도교육청, 한국과학창의재단에서 운영하는
                        디지털새싹 캠프의 강사로도 활동하고 있습니다.</Card.Body>
                    <Card.Body>압구정/반포/잠실/대치 소재의 IT 학원 출강을 통한 탄탄한 수업 경력과 다양한 학생 경험을
                        바탕으로 C/C++, Python, Java, 알고리즘 등의 프로그래밍 수업과 AP Computer Science,
                        USACO, KSEP/ISEF 등의 유학생 SW 수업, 또 학생부 종합전형 및 AI/SW 전형 대비 면접 수업을
                        진행하고 있습니다.</Card.Body>
                    <Card.Body>2023년 주요 실적 (대입): 서울대 지역균형전형 최초합, 한양대(서울) 소프트웨어인재 전형
                        최초합, 국민대 SW 특기자 전형 최초합, 가천대 조기취업형 계약학과 전형 최초합</Card.Body>
                    <Card.Body>2024년 주요 실적 (대회 지도 후 수상): 교내 발명품대회, 제3회 국제청소년 한국유네스코유산
                        알리기 아이디어대회(SW첨단기술부문), Korea-International Youth Olympiad 2024</Card.Body>
                </Card>
            </Col>
        </Row>
        <br/>
    </Container>);
}

export default ProfilePage;