/* There are pillars near the road. The distance between the pillars is the same and the width of the pillars is the same. Your function accepts three arguments:

number of pillars (≥ 1);
distance between pillars (10 - 30 meters);
width of the pillar (10 - 50 centimeters).
Calculate the distance between the first and the last pillar in centimeters (without the width of the first and last pillar).
*/

/* say there are 3 pillars, 10 m between, width 10cm 
calulation:  1000 + 1000 + 10 = 2010
generalise: distance between * 100 * (number - 1) + width * (number - 2)
test: say there are 5 pillars, 20 m between, width 25cm

20 * 4 * 100  +  25 * 3 = 875

*/