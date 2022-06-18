@extends('website.layouts.websiteNew')

@section("content")

    <main style="background-color:#fff">
        <section style="background: #fff" class="top-image-section">
            <div class="container">
                <div class="top-image">
                    <div>
                        <h2>ƏMƏKDAŞ VƏ MÜƏLLİMLƏR</h2>
                        <span class="d-lg-block d-none">İkİncİ başlıq</span>
                    </div>
                    <img src="assets/images/Xeberler page/image 1.png" alt="image">
                </div>
            </div>
        </section>
        <section style="background-color: #fff;">
            <div class="container">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="#">UNEC</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Əməkdaş və müəllimlər</li>
                    </ol>
                </nav>
            </div>
        </section>
        <section class="user" style="margin-bottom: 10em">
            <div class="container">
                <div class="box">
                    <div class="row">
                        <div class="col-lg-4 col-12">
                            <div class="user">
                                <div class="image"><img src="assets/images/person.png" alt="person"></div>
                                <div class="name d-block d-lg-none">
                                    <h2>Абалмасова Екатерина Сергеевна</h2>
                                    <span>Elmi adı, Vezifəsi</span>
                                </div>
                                <div class="language">
                                    <h2>Владение языками</h2>
                                    <a href="#">английский</a>
                                </div>
                                <div class="Contacts">
                                    <h2>Контакты</h2>
                                    <span>email@unec.edu.az</span>
                                    <span>+99412 1845 1023</span>
                                    <span>Потаповский пер., д. 16, стр. 10, каб. 211</span>
                                </div>
                                <ul>
                                    <li>SPIN РИНЦ: <span>5586-0326</span></li>
                                    <li>ORCID: <span>0000-0002-1251-432X</span></li>
                                    <li>ResearcherID: <span>K-5364-2015</span></li>
                                    <li>Scopus AuthorID: <span>55862160400</span></li>
                                    <li>Google Scholar: <span></span></li>
                                </ul>
                                <div class="interests d-none d-lg-block">
                                    <h2>Профессиональные интересы</h2>
                                    <ul>
                                        <li><a href="#">Экономика</a></li>
                                        <li><a href="#">Образования</a></li>
                                        <li><a href="#">финансирование вузов</a></li>
                                    </ul>
                                </div>
                                <div class="ctrl d-none d-lg-block">
                                    <h2>Версия для печати</h2>
                                    <h3>CTRL + Enter</h3>
                                    <p>Mətində orfoqrafik səhf tapdınız?
                                        Məlumatı seçin və Ctrl+Enter klavişlərini sıxın və bu haqda bizə məlumat verin.
                                    </p>
                                    <span>Təşəkkür edirik!</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-8 col-12">
                            <div class="user-info">
                                <div class="info d-none d-lg-block">
                                    <h2>Абалмасова Екатерина Сергеевна</h2>
                                    <span>Elmi adı, Vezifəsi</span>
                                </div>
                                <div class="tabs">
                                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                                        <li class="nav-item" role="presentation">
                                            <a class="nav-link" id="Домашняя-tab" data-toggle="tab" href="#Домашняя" role="tab"
                                               aria-controls="Домашняя" aria-selected="false">Домашняя страница</a>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <a class="nav-link active" id="Преподавание-tab" data-toggle="tab" href="#Преподавание"
                                               role="tab" aria-controls="Преподавание" aria-selected="true">Преподавание</a>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <a class="nav-link" id="исследования-tab" data-toggle="tab" href="#исследования" role="tab"
                                               aria-controls="исследования" aria-selected="false">Публикации и исследования</a>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <a class="nav-link" id="Опыт-tab" data-toggle="tab" href="#Опыт" role="tab" aria-controls="Опыт"
                                               aria-selected="false">Опыт работы</a>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <a class="nav-link" id="Прочее-tab" data-toggle="tab" href="#Прочее" role="tab"
                                               aria-controls="Прочее" aria-selected="false">Прочее</a>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <a class="nav-link" id="новостях-tab" data-toggle="tab" href="#новостях" role="tab"
                                               aria-controls="новостях" aria-selected="false">В новостях</a>
                                        </li>
                                    </ul>
                                    <div class="tab-content" id="myTabContent">
                                        <div class="tab-pane fade show active" id="Домашняя" role="tabpanel"
                                             aria-labelledby="Домашняя-tab">
                                            <h2>Полномочия / обязанности</h2>
                                            <h3 class="d-none d-lg-block">Домашняя страница</h3>
                                            <ul>
                                                <li>
                                                    <div class="date">
                                                        <span>1985</span>
                                                    </div>
                                                    <p>Кандидат экономических наук: специальность 08.00.13 «Математические и инструментальные
                                                        методы экономики»</p>
                                                </li>
                                                <li>
                                                    <div class="date">
                                                        <span>1879</span>
                                                    </div>
                                                    <p>Специалитет: Московский государственный университет им. М.В. Ломоносова, специальность
                                                        «Экономическая кибернетика»,
                                                        квалификация «экономист-математик»</p>
                                                </li>
                                                <li>
                                                    <div class="date">
                                                        <span>1980</span>
                                                    </div>
                                                    <p>XXIII Ясинская (Апрельская) международная научная конференция по проблемам развития
                                                        экономики и общества (Москва).
                                                        Доклад: Спрос на высшее образования в «пандемийный» 2020: что изменилось, и что это значит
                                                        в
                                                        контексте госполитики</p>
                                                    <a href="#">
                                                        <img src="assets/images/icon _file type pdf_.svg" alt="icon file type pdf">
                                                    </a>
                                                </li>
                                                <li>
                                                    <div class="date">
                                                        <span>1982</span>
                                                    </div>
                                                    <p>XVIII международная научно-практическая конференция «Тенденции развития образования»
                                                        Глобальные вызовы и неравные
                                                        возможности (Москва). Доклад: Новые механизмы финансирования школьного образования</p>
                                                    <a href="#">
                                                        <img src="assets/images/icon _file type pdf_.svg" alt="icon file type pdf">
                                                    </a>
                                                </li>
                                                <li>
                                                    <div class="date">
                                                        <span>1984</span>
                                                    </div>
                                                    <p>"XXII Апрельская международная научная конференция по проблемам развития экономики и
                                                        общества" (Москва). Доклад:
                                                        Социальная поддержка семей с детьми дошкольного возраста в контексте международных
                                                        сравнений
                                                    </p>
                                                    <a href="#">
                                                        <img src="assets/images/icon _file type word_.svg" alt="icon file type word_">
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="tab-pane fade" id="Преподавание" role="tabpanel" aria-labelledby="Преподавание-tab">
                                            <h2>Полномочия / обязанности</h2>
                                            <h3 class="d-none d-lg-block">Преподавание</h3>
                                            <ul>
                                                <li>
                                                    <div class="date">
                                                        <span>1985</span>
                                                    </div>
                                                    <p>Кандидат экономических наук: специальность 08.00.13 «Математические и инструментальные
                                                        методы экономики»</p>
                                                </li>
                                                <li>
                                                    <div class="date">
                                                        <span>1879</span>
                                                    </div>
                                                    <p>Специалитет: Московский государственный университет им. М.В. Ломоносова, специальность
                                                        «Экономическая кибернетика»,
                                                        квалификация «экономист-математик»</p>
                                                </li>
                                                <li>
                                                    <div class="date">
                                                        <span>1980</span>
                                                    </div>
                                                    <p>XXIII Ясинская (Апрельская) международная научная конференция по проблемам развития
                                                        экономики и общества (Москва).
                                                        Доклад: Спрос на высшее образования в «пандемийный» 2020: что изменилось, и что это значит
                                                        в
                                                        контексте госполитики</p>
                                                    <a href="#">
                                                        <img src="assets/images/icon _file type pdf_.svg" alt="icon file type pdf">
                                                    </a>
                                                </li>
                                                <li>
                                                    <div class="date">
                                                        <span>1982</span>
                                                    </div>
                                                    <p>XVIII международная научно-практическая конференция «Тенденции развития образования»
                                                        Глобальные вызовы и неравные
                                                        возможности (Москва). Доклад: Новые механизмы финансирования школьного образования</p>
                                                    <a href="#">
                                                        <img src="assets/images/icon _file type pdf_.svg" alt="icon file type pdf">
                                                    </a>
                                                </li>
                                                <li>
                                                    <div class="date">
                                                        <span>1984</span>
                                                    </div>
                                                    <p>"XXII Апрельская международная научная конференция по проблемам развития экономики и
                                                        общества" (Москва). Доклад:
                                                        Социальная поддержка семей с детьми дошкольного возраста в контексте международных
                                                        сравнений
                                                    </p>
                                                    <a href="#">
                                                        <img src="assets/images/icon _file type word_.svg" alt="icon file type word_">
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="tab-pane fade" id="исследования" role="tabpanel" aria-labelledby="исследования-tab">
                                            <h2>Полномочия / обязанности</h2>
                                            <h3 class="d-none d-lg-block">Публикации и исследования</h3>
                                            <ul>
                                                <li>
                                                    <div class="date">
                                                        <span>1985</span>
                                                    </div>
                                                    <p>Кандидат экономических наук: специальность 08.00.13 «Математические и инструментальные
                                                        методы экономики»</p>
                                                </li>
                                                <li>
                                                    <div class="date">
                                                        <span>1879</span>
                                                    </div>
                                                    <p>Специалитет: Московский государственный университет им. М.В. Ломоносова, специальность
                                                        «Экономическая кибернетика»,
                                                        квалификация «экономист-математик»</p>
                                                </li>
                                                <li>
                                                    <div class="date">
                                                        <span>1980</span>
                                                    </div>
                                                    <p>XXIII Ясинская (Апрельская) международная научная конференция по проблемам развития
                                                        экономики и общества (Москва).
                                                        Доклад: Спрос на высшее образования в «пандемийный» 2020: что изменилось, и что это значит
                                                        в
                                                        контексте госполитики</p>
                                                    <a href="#">
                                                        <img src="assets/images/icon _file type pdf_.svg" alt="icon file type pdf">
                                                    </a>
                                                </li>
                                                <li>
                                                    <div class="date">
                                                        <span>1982</span>
                                                    </div>
                                                    <p>XVIII международная научно-практическая конференция «Тенденции развития образования»
                                                        Глобальные вызовы и неравные
                                                        возможности (Москва). Доклад: Новые механизмы финансирования школьного образования</p>
                                                    <a href="#">
                                                        <img src="assets/images/icon _file type pdf_.svg" alt="icon file type pdf">
                                                    </a>
                                                </li>
                                                <li>
                                                    <div class="date">
                                                        <span>1984</span>
                                                    </div>
                                                    <p>"XXII Апрельская международная научная конференция по проблемам развития экономики и
                                                        общества" (Москва). Доклад:
                                                        Социальная поддержка семей с детьми дошкольного возраста в контексте международных
                                                        сравнений
                                                    </p>
                                                    <a href="#">
                                                        <img src="assets/images/icon _file type word_.svg" alt="icon file type word_">
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="tab-pane fade" id="Опыт" role="tabpanel" aria-labelledby="Опыт-tab">
                                            <h2>Полномочия / обязанности</h2>
                                            <h3 class="d-none d-lg-block">Опыт работы</h3>
                                            <ul>
                                                <li>
                                                    <div class="date">
                                                        <span>1985</span>
                                                    </div>
                                                    <p>Кандидат экономических наук: специальность 08.00.13 «Математические и инструментальные
                                                        методы экономики»</p>
                                                </li>
                                                <li>
                                                    <div class="date">
                                                        <span>1879</span>
                                                    </div>
                                                    <p>Специалитет: Московский государственный университет им. М.В. Ломоносова, специальность
                                                        «Экономическая кибернетика»,
                                                        квалификация «экономист-математик»</p>
                                                </li>
                                                <li>
                                                    <div class="date">
                                                        <span>1980</span>
                                                    </div>
                                                    <p>XXIII Ясинская (Апрельская) международная научная конференция по проблемам развития
                                                        экономики и общества (Москва).
                                                        Доклад: Спрос на высшее образования в «пандемийный» 2020: что изменилось, и что это значит
                                                        в
                                                        контексте госполитики</p>
                                                    <a href="#">
                                                        <img src="assets/images/icon _file type pdf_.svg" alt="icon file type pdf">
                                                    </a>
                                                </li>
                                                <li>
                                                    <div class="date">
                                                        <span>1982</span>
                                                    </div>
                                                    <p>XVIII международная научно-практическая конференция «Тенденции развития образования»
                                                        Глобальные вызовы и неравные
                                                        возможности (Москва). Доклад: Новые механизмы финансирования школьного образования</p>
                                                    <a href="#">
                                                        <img src="assets/images/icon _file type pdf_.svg" alt="icon file type pdf">
                                                    </a>
                                                </li>
                                                <li>
                                                    <div class="date">
                                                        <span>1984</span>
                                                    </div>
                                                    <p>"XXII Апрельская международная научная конференция по проблемам развития экономики и
                                                        общества" (Москва). Доклад:
                                                        Социальная поддержка семей с детьми дошкольного возраста в контексте международных
                                                        сравнений
                                                    </p>
                                                    <a href="#">
                                                        <img src="assets/images/icon _file type word_.svg" alt="icon file type word_">
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="tab-pane fade" id="Прочее" role="tabpanel" aria-labelledby="Прочее-tab">
                                            <h2>Полномочия / обязанности</h2>
                                            <h3 class="d-none d-lg-block">Прочее</h3>
                                            <ul>
                                                <li>
                                                    <div class="date">
                                                        <span>1985</span>
                                                    </div>
                                                    <p>Кандидат экономических наук: специальность 08.00.13 «Математические и инструментальные
                                                        методы экономики»</p>
                                                </li>
                                                <li>
                                                    <div class="date">
                                                        <span>1879</span>
                                                    </div>
                                                    <p>Специалитет: Московский государственный университет им. М.В. Ломоносова, специальность
                                                        «Экономическая кибернетика»,
                                                        квалификация «экономист-математик»</p>
                                                </li>
                                                <li>
                                                    <div class="date">
                                                        <span>1980</span>
                                                    </div>
                                                    <p>XXIII Ясинская (Апрельская) международная научная конференция по проблемам развития
                                                        экономики и общества (Москва).
                                                        Доклад: Спрос на высшее образования в «пандемийный» 2020: что изменилось, и что это значит
                                                        в
                                                        контексте госполитики</p>
                                                    <a href="#">
                                                        <img src="assets/images/icon _file type pdf_.svg" alt="icon file type pdf">
                                                    </a>
                                                </li>
                                                <li>
                                                    <div class="date">
                                                        <span>1982</span>
                                                    </div>
                                                    <p>XVIII международная научно-практическая конференция «Тенденции развития образования»
                                                        Глобальные вызовы и неравные
                                                        возможности (Москва). Доклад: Новые механизмы финансирования школьного образования</p>
                                                    <a href="#">
                                                        <img src="assets/images/icon _file type pdf_.svg" alt="icon file type pdf">
                                                    </a>
                                                </li>
                                                <li>
                                                    <div class="date">
                                                        <span>1984</span>
                                                    </div>
                                                    <p>"XXII Апрельская международная научная конференция по проблемам развития экономики и
                                                        общества" (Москва). Доклад:
                                                        Социальная поддержка семей с детьми дошкольного возраста в контексте международных
                                                        сравнений
                                                    </p>
                                                    <a href="#">
                                                        <img src="assets/images/icon _file type word_.svg" alt="icon file type word_">
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="tab-pane fade" id="новостях" role="tabpanel" aria-labelledby="новостях-tab">
                                            <h2>Полномочия / обязанности</h2>
                                            <h3 class="d-none d-lg-block">В новостях</h3>
                                            <ul>
                                                <li>
                                                    <div class="date">
                                                        <span>1985</span>
                                                    </div>
                                                    <p>Кандидат экономических наук: специальность 08.00.13 «Математические и инструментальные
                                                        методы экономики»</p>
                                                </li>
                                                <li>
                                                    <div class="date">
                                                        <span>1879</span>
                                                    </div>
                                                    <p>Специалитет: Московский государственный университет им. М.В. Ломоносова, специальность
                                                        «Экономическая кибернетика»,
                                                        квалификация «экономист-математик»</p>
                                                </li>
                                                <li>
                                                    <div class="date">
                                                        <span>1980</span>
                                                    </div>
                                                    <p>XXIII Ясинская (Апрельская) международная научная конференция по проблемам развития
                                                        экономики и общества (Москва).
                                                        Доклад: Спрос на высшее образования в «пандемийный» 2020: что изменилось, и что это значит
                                                        в
                                                        контексте госполитики</p>
                                                    <a href="#">
                                                        <img src="assets/images/icon _file type pdf_.svg" alt="icon file type pdf">
                                                    </a>
                                                </li>
                                                <li>
                                                    <div class="date">
                                                        <span>1982</span>
                                                    </div>
                                                    <p>XVIII международная научно-практическая конференция «Тенденции развития образования»
                                                        Глобальные вызовы и неравные
                                                        возможности (Москва). Доклад: Новые механизмы финансирования школьного образования</p>
                                                    <a href="#">
                                                        <img src="assets/images/icon _file type pdf_.svg" alt="icon file type pdf">
                                                    </a>
                                                </li>
                                                <li>
                                                    <div class="date">
                                                        <span>1984</span>
                                                    </div>
                                                    <p>"XXII Апрельская международная научная конференция по проблемам развития экономики и
                                                        общества" (Москва). Доклад:
                                                        Социальная поддержка семей с детьми дошкольного возраста в контексте международных
                                                        сравнений
                                                    </p>
                                                    <a href="#">
                                                        <img src="assets/images/icon _file type word_.svg" alt="icon file type word_">
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>

@endsection