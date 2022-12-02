-- MariaDB dump 10.19  Distrib 10.9.3-MariaDB, for Linux (x86_64)
--
-- Host: 127.0.0.1    Database: metricas_cisko
-- ------------------------------------------------------
-- Server version	10.9.3-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `actividades`
--

DROP TABLE IF EXISTS `actividades`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `actividades` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `actividades`
--

LOCK TABLES `actividades` WRITE;
/*!40000 ALTER TABLE `actividades` DISABLE KEYS */;
INSERT INTO `actividades` VALUES
(1,'Habits tracking'),
(2,'Work'),
(3,'Wim Hof breathing'),
(4,'Cool shower'),
(5,'Nigth routine'),
(6,'Dance');
/*!40000 ALTER TABLE `actividades` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `eventos`
--

DROP TABLE IF EXISTS `eventos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `eventos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `actividad_id` int(11) DEFAULT NULL,
  `actividad_personalizada` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `prioridad` int(11) DEFAULT NULL,
  `fecha` date NOT NULL,
  `turno_id` int(11) DEFAULT NULL,
  `duracion` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `eventos`
--

LOCK TABLES `eventos` WRITE;
/*!40000 ALTER TABLE `eventos` DISABLE KEYS */;
INSERT INTO `eventos` VALUES
(1,NULL,'almuerzo sociabilizante',1,'2022-09-16',2,NULL),
(2,2,NULL,1,'2022-09-15',1,NULL),
(3,2,NULL,1,'2022-09-15',2,NULL),
(4,1,NULL,3,'2022-09-30',4,NULL),
(5,2,NULL,1,'2022-09-23',1,NULL),
(6,2,NULL,1,'2022-09-23',2,NULL),
(7,6,NULL,3,'2022-09-23',4,NULL),
(8,1,NULL,3,'2022-09-24',4,NULL),
(9,2,NULL,1,'2022-09-25',1,NULL),
(10,2,NULL,1,'2022-09-25',2,NULL),
(11,6,NULL,3,'2022-09-25',3,NULL),
(12,NULL,'visita familia',1,'2022-09-25',1,NULL),
(13,NULL,'visita familia',1,'2022-09-25',2,NULL),
(14,1,NULL,3,'2022-09-26',4,NULL),
(15,2,NULL,1,'2022-09-27',1,NULL),
(16,2,NULL,1,'2022-09-27',2,NULL),
(17,1,NULL,3,'2022-09-28',4,NULL),
(18,2,NULL,1,'2022-09-28',1,NULL),
(19,2,NULL,1,'2022-09-28',2,NULL),
(20,2,NULL,1,'2022-09-29',1,NULL),
(21,2,NULL,1,'2022-09-29',3,NULL),
(22,2,NULL,1,'2022-09-30',2,NULL),
(23,2,NULL,1,'2022-09-30',3,NULL);
/*!40000 ALTER TABLE `eventos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `metricas_diarias`
--

DROP TABLE IF EXISTS `metricas_diarias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `metricas_diarias` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fecha` date NOT NULL,
  `turno_id` int(11) DEFAULT NULL,
  `nivel_energia` double NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `metricas_diarias`
--

LOCK TABLES `metricas_diarias` WRITE;
/*!40000 ALTER TABLE `metricas_diarias` DISABLE KEYS */;
INSERT INTO `metricas_diarias` VALUES
(1,'2022-09-15',1,4),
(2,'2022-09-15',2,5),
(3,'2022-09-23',1,3),
(4,'2022-09-23',3,3),
(5,'2022-09-23',2,3),
(6,'2022-09-23',4,7),
(7,'2022-09-24',4,5),
(8,'2022-09-25',1,4),
(9,'2022-09-25',2,4),
(10,'2022-09-25',3,7),
(11,'2022-09-25',4,6),
(12,'2022-09-26',4,5),
(13,'2022-09-27',1,3.5),
(14,'2022-09-27',2,3.5),
(15,'2022-09-28',4,6),
(16,'2022-09-28',1,3.5),
(17,'2022-09-28',2,3.5),
(18,'2022-09-29',1,4),
(19,'2022-09-29',3,4),
(20,'2022-09-30',2,5.5),
(21,'2022-09-30',3,5.5),
(22,'2022-09-30',4,6);
/*!40000 ALTER TABLE `metricas_diarias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `turnos`
--

DROP TABLE IF EXISTS `turnos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `turnos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `turnos`
--

LOCK TABLES `turnos` WRITE;
/*!40000 ALTER TABLE `turnos` DISABLE KEYS */;
INSERT INTO `turnos` VALUES
(1,'morning'),
(2,'afternoon'),
(3,'evening'),
(4,'night');
/*!40000 ALTER TABLE `turnos` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-12-02 20:14:24
