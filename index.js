// distance in blocks from 42nd st
function distanceFromHqInBlocks(street) {
    return Math.abs(42 - street);
}

// distance in feet (block = 264ft)
function distanceFromHqInFeet(street) {
    return distanceFromHqInBlocks(street) * 264;
}

// distance travelled in feet (block = 264ft)
function distanceTravelledInFeet(start, destination) {
    return Math.abs(destination-start) * 264;
}

// free < 400; .02 per foot over 400; $25 over 2000
function calculatesFarePrice(start, destination) {
    let dist = distanceTravelledInFeet(start, destination);
    if (dist <= 400) {
        return 0;
    } else if (dist <= 2000) {
        let paidDist = dist - 400;
        return paidDist * .02;
    } else if (dist < 2500) {
        return 25;
    } else {
        return "cannot travel that far";
    }
}
