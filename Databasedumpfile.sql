CREATE DATABASE IF NOT EXISTS contacts;
DEFAULT CHARACTER SET = 'utf8mb4';

SET NAMES utf8mb4;

USE contacts;


CREATE TABLE `contacts` (
    `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `first` VARCHAR(255) NOT NULL,
    `last` VARCHAR(255) NOT NULL,
    `avatar` VARCHAR(255),
    `twitter` VARCHAR(255),
    `notes` TEXT,
    `favorite` TINYINT(1),
    `createdAt` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO Contact (first, last, avatar, twitter, notes, favorite, createdAt) VALUES
('Shruti', 'Kapoor', 'https://sessionize.com/image/124e-400o400o2-wHVdAuNaxi8KJrgtN3ZKci.jpg', '@shrutikapoor08', NULL, 0, CURRENT_TIMESTAMP),
('Glenn', 'Reyes', 'https://sessionize.com/image/1940-400o400o2-Enh9dnYmrLYhJSTTPSw3MH.jpg', '@glnnrys', NULL, 0, CURRENT_TIMESTAMP),
('Ryan', 'Florence', 'https://sessionize.com/image/9273-400o400o2-3tyrUE3HjsCHJLU5aUJCja.jpg', NULL, NULL, 0, CURRENT_TIMESTAMP),
('Oscar', 'Newman', 'https://sessionize.com/image/d14d-400o400o2-pyB229HyFPCnUcZhHf3kWS.png', '@__oscarnewman', NULL, 0, CURRENT_TIMESTAMP),
('Michael', 'Jackson', 'https://sessionize.com/image/fd45-400o400o2-fw91uCdGU9hFP334dnyVCr.jpg', NULL, NULL, 0, CURRENT_TIMESTAMP),
('Christopher', 'Chedeau', 'https://sessionize.com/image/b07e-400o400o2-KgNRF3S9sD5ZR4UsG7hG4g.jpg', '@Vjeux', NULL, 0, CURRENT_TIMESTAMP),
('Cameron', 'Matheson', 'https://sessionize.com/image/262f-400o400o2-UBPQueK3fayaCmsyUc1Ljf.jpg', '@cmatheson', NULL, 0, CURRENT_TIMESTAMP),
('Brooks', 'Lybrand', 'https://sessionize.com/image/820b-400o400o2-Ja1KDrBAu5NzYTPLSC3GW8.jpg', '@BrooksLybrand', NULL, 0, CURRENT_TIMESTAMP),
('Alex', 'Anderson', 'https://sessionize.com/image/df38-400o400o2-JwbChVUj6V7DwZMc9vJEHc.jpg', '@ralex1993', NULL, 0, CURRENT_TIMESTAMP),
('Kent C.', 'Dodds', 'https://sessionize.com/image/5578-400o400o2-BMT43t5kd2U1XstaNnM6Ax.jpg', '@kentcdodds', NULL, 0, CURRENT_TIMESTAMP),
('Nevi', 'Shah', 'https://sessionize.com/image/c9d5-400o400o2-Sri5qnQmscaJXVB8m3VBgf.jpg', '@nevikashah', NULL, 0, CURRENT_TIMESTAMP),
('Andrew', 'Petersen', 'https://sessionize.com/image/2694-400o400o2-MYYTsnszbLKTzyqJV17w2q.png', NULL, NULL, 0, CURRENT_TIMESTAMP),
('Scott', 'Smerchek', 'https://sessionize.com/image/907a-400o400o2-9TM2CCmvrw6ttmJiTw4Lz8.jpg', '@smerchek', NULL, 0, CURRENT_TIMESTAMP),
('Giovanni', 'Benussi', 'https://sessionize.com/image/08be-400o400o2-WtYGFFR1ZUJHL9tKyVBNPV.jpg', '@giovannibenussi', NULL, 0, CURRENT_TIMESTAMP),
('Igor', 'Minar', 'https://sessionize.com/image/f814-400o400o2-n2ua5nM9qwZA2hiGdr1T7N.jpg', '@IgorMinar', NULL, 0, CURRENT_TIMESTAMP),
('Brandon', 'Kish', 'https://sessionize.com/image/fb82-400o400o2-LbvwhTVMrYLDdN3z4iEFMp.jpeg', NULL, NULL, 0, CURRENT_TIMESTAMP),
('Arisa', 'Fukuzaki', 'https://sessionize.com/image/fcda-400o400o2-XiYRtKK5Dvng5AeyC8PiUA.png', '@arisa_dev', NULL, 0, CURRENT_TIMESTAMP),
('Alexandra', 'Spalato', 'https://sessionize.com/image/c8c3-400o400o2-PR5UsgApAVEADZRixV4H8e.jpeg', '@alexadark', NULL, 0, CURRENT_TIMESTAMP),
('Cat', 'Johnson', 'https://sessionize.com/image/7594-400o400o2-hWtdCjbdFdLgE2vEXBJtyo.jpg', NULL, NULL, 0, CURRENT_TIMESTAMP),
('Ashley', 'Narcisse', 'https://sessionize.com/image/5636-400o400o2-TWgi8vELMFoB3hB9uPw62d.jpg', '@_darkfadr', NULL, 0, CURRENT_TIMESTAMP),
('Edmund', 'Hung', 'https://sessionize.com/image/6aeb-400o400o2-Q5tAiuzKGgzSje9ZsK3Yu5.JPG', '@_edmundhung', NULL, 0, CURRENT_TIMESTAMP),
('Clifford', 'Fajardo', 'https://sessionize.com/image/30f1-400o400o2-wJBdJ6sFayjKmJycYKoHSe.jpg', '@cliffordfajard0', NULL, 0, CURRENT_TIMESTAMP),
('Erick', 'Tamayo', 'https://sessionize.com/image/6faa-400o400o2-amseBRDkdg7wSK5tjsFDiG.jpg', '@ericktamayo', NULL, 0, CURRENT_TIMESTAMP),
('Paul', 'Bratslavsky', 'https://sessionize.com/image/feba-400o400o2-R4GE7eqegJNFf3cQ567obs.jpg', '@codingthirty', NULL, 0, CURRENT_TIMESTAMP),
('Pedro', 'Cattori', 'https://sessionize.com/image/c315-400o400o2-spjM5A6VVfVNnQsuwvX3DY.jpg', '@pcattori', NULL, 0, CURRENT_TIMESTAMP),
('Andre', 'Landgraf', 'https://sessionize.com/image/eec1-400o400o2-HkvWKLFqecmFxLwqR9KMRw.jpg', '@AndreLandgraf94', NULL, 0, CURRENT_TIMESTAMP),
('Monica', 'Powell', 'https://sessionize.com/image/c73a-400o400o2-4MTaTq6ftC15hqwtqUJmTC.jpg', '@indigitalcolor', NULL, 0, CURRENT_TIMESTAMP),
('Brian', 'Lee', 'https://sessionize.com/image/cef7-400o400o2-KBZUydbjfkfGACQmjbHEvX.jpeg', '@brian_dlee', NULL, 0, CURRENT_TIMESTAMP),
('Sean', 'McQuaid', 'https://sessionize.com/image/f83b-400o400o2-Pyw3chmeHMxGsNoj3nQmWU.jpg', '@SeanMcQuaidCode', NULL, 0, CURRENT_TIMESTAMP),
('Shane', 'Walker', 'https://sessionize.com/image/a9fc-400o400o2-JHBnWZRoxp7QX74Hdac7AZ.jpg', '@swalker326', NULL, 0, CURRENT_TIMESTAMP),
('Jon', 'Jensen', 'https://sessionize.com/image/6644-400o400o2-aHnGHb5Pdu3D32MbfrnQbj.jpg', '@jenseng', NULL, 0, CURRENT_TIMESTAMP);
