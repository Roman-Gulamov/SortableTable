-- MySQL dump 10.13  Distrib 8.0.24, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: paints
-- ------------------------------------------------------
-- Server version	8.0.11

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `productsName` varchar(200) NOT NULL,
  `productsNumber` int(11) NOT NULL,
  `productsDate` datetime NOT NULL,
  `productsDistance` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=465 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Wallquest, Brownsone MS90102',2,'2021-04-27 00:00:00',5),(2,'Ostima Freestyle 88336',10,'2021-03-12 00:00:00',15),(3,'Loymina A La Prima Pm 5 007',7,'2021-06-22 00:00:00',10),(4,'Loymina A La Prima Pm 5 006',20,'2021-01-01 00:00:00',1),(5,'Milassa Mirabelle MR3 005',18,'2021-02-21 00:00:00',3),(6,'Goymina A La Prima Pm 3 015',4,'2021-02-13 00:00:00',11),(7,'Loymina A La Prima Pm 1 010',10,'2021-09-27 00:00:00',70),(8,'Decoprint Young at home YH-17962',5,'2021-03-21 00:00:00',34),(9,'Caselio Moove 101397508',4,'2021-11-05 00:00:00',67),(10,'Decoprint Young at home YH-17965',18,'2021-12-25 00:00:00',72),(11,'Loymina Classic V9221',5,'2021-07-15 00:00:00',22),(12,'KT-Exclusive Destination USA TH50501',3,'2021-09-19 00:00:00',46),(13,'Wallquest Savannah House SV62106M',12,'2021-10-05 00:00:00',80),(14,'Decoprint Spectrum SPD-18293',18,'2021-09-25 00:00:00',101),(15,'KT-Exclusive Street life SL15 5066',5,'2021-03-25 00:00:00',36),(16,'Loymina Sialia Q12221',7,'2021-03-25 00:00:00',3),(17,'Lewis&Wood Classic Wallpapers',4,'2021-03-25 00:00:00',11),(18,'Mr Perswall Flowers and Aquarelle P260901-8',9,'2021-06-15 00:00:00',17),(19,'Mr Perswall Underground P250401-9',12,'2021-08-12 00:00:00',20),(20,'Mr Perswall Daily Details P192401-8',16,'2021-11-20 00:00:00',20),(21,'Borastapeter Mr Perswall P182301-9',6,'2021-11-15 00:00:00',30),(22,'Mr Perswall Adventure P172802-6',8,'2021-04-25 00:00:00',40),(23,'Mr Perswall Adventure P172701-8',9,'2021-09-25 00:00:00',30),(24,'Mr Perswall Nostalgic P163201-W',4,'2021-05-05 00:00:00',11),(25,'Mr Perswall Nostalgic P162201-3',14,'2021-03-18 00:00:00',3),(26,'Mr Perswall Communication P131003-4',10,'2021-09-30 00:00:00',11),(27,'Mr Perswall Hide and Seek P121602-4',5,'2021-06-24 00:00:00',70),(28,'Mr Perswall Urban Nature P031801-4',6,'2021-03-30 00:00:00',33),(29,'Mr Perswall Urban Nature P031303-4',9,'2021-09-18 00:00:00',40),(30,'Mr Perswall Creativity and Photo Art P011201-5',19,'2021-07-11 00:00:00',33),(31,'Mr Perswall Creativity and Photo Art P010701-4',11,'2021-11-11 00:00:00',12),(32,'Dandino Coconet p-583',22,'2021-08-25 00:00:00',12),(33,'Tiffany Design Fibra Viva OR412',2,'2021-12-25 00:00:00',33),(34,'Wallquest Vintage Home MV72200M',7,'2021-01-20 00:00:00',50),(35,'NLXL NLXL Lab MRV-04-7',4,'2021-04-15 00:00:00',70),(36,'Decoprint Mood MD902024',9,'2021-09-11 00:00:00',33),(37,'Decoprint Mood MD902019',5,'2021-11-14 00:00:00',11),(38,'Chesapeake Gentelmens Quarters MAN01833B',11,'2021-12-05 00:00:00',3),(39,'Loymina Lac Deco Lac11 020',22,'2021-04-05 00:00:00',1),(40,'KT-Exclusive Pajama Party 53852B',21,'2021-08-08 00:00:00',11),(41,'Casadeco Infinity INF 24844128',3,'2021-05-30 00:00:00',70),(42,'Lewis&Wood Classic Wallpapers Flyfishing',4,'2021-07-08 00:00:00',76),(43,'Wallquest English Rose EN23003F',20,'2021-09-05 00:00:00',10),(44,'Mr Perswall Isabelle Mcallister Collection',34,'2021-03-01 00:00:00',5),(45,'Mr Perswall Isabelle Mcallister Collection',33,'2021-11-14 00:00:00',3),(46,'KT-Exclusive Eco Chick EC51804M',23,'2021-02-27 00:00:00',11),(47,'Mr Perswall Whats Your Story E040610-6',22,'2021-12-12 00:00:00',33),(48,'Mr Perswall New York Memories E010901-4',45,'2021-09-14 00:00:00',10),(49,'Loymina Illusion DSE 003 Illusion',23,'2021-09-09 00:00:00',14),(50,'Loymina Illusion DS 008 Illusion',7,'2021-09-19 00:00:00',10),(51,'NLXL Daniel Paola DRO-08',4,'2021-08-28 00:00:00',5),(52,'Mr Perswall Accessories DM229-1',8,'2021-03-19 00:00:00',3),(53,'Mr Perswall Accessories DM220-2',5,'2021-06-16 00:00:00',1),(54,'Mr Perswall Accessories DM216-4',6,'2021-04-19 00:00:00',11),(55,'Loymina Illusion DM 003 Illusion',39,'2021-05-17 00:00:00',13),(56,'Decor Deluxe Jewel Box CA7620',10,'2021-03-19 00:00:00',10),(57,'Rasch Magic Walls 3 893151',11,'2021-09-28 00:00:00',70),(58,'Rasch Magic Walls 3 892208',23,'2021-12-30 00:00:00',33),(59,'Rasch Room Art 848168',6,'2021-12-27 00:00:00',12),(60,'Hohenberger Gentlements Relish 80918',8,'2021-03-25 00:00:00',10),(61,'Colani Evolution 76970',3,'2021-07-15 00:00:00',33),(62,'Decor Deluxe Lustre 65121',5,'2021-12-25 00:00:00',10),(63,'Borastapeter Scandinavian designers 6275',7,'2021-01-19 00:00:00',70),(64,'Borastapeter Scandinavian designers 6272',11,'2021-02-12 00:00:00',11),(65,'Colani Evolution 56397',16,'2021-07-15 00:00:00',3),(66,'Andrea Rossi Pianosa 54169-3',14,'2021-10-01 00:00:00',5),(67,'Colani Visions 53376',18,'2021-01-28 00:00:00',7),(68,'Coordonne Random Papers 4500214',11,'2021-09-11 00:00:00',90),(69,'Coordonne Random Papers 4500203',20,'2021-07-21 00:00:00',9),(70,'Cristiana Masi Blooming Garden',5,'2021-02-28 00:00:00',5);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-04-28  2:39:05
