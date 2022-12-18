export function findClosestPair(points: number[][]): {
  point1: number[];
  point2: number[];
  distance: number;
} {
  // base case: return maximum distance if there are no points or only one point
  if (points.length <= 1) {
    return { point1: [], point2: [], distance: Number.MAX_VALUE };
  }

  // sort points by x-coordinate
  points.sort((a, b) => a[0] - b[0]);

  // divide points into left and right halves
  const mid = Math.floor(points.length / 2);
  const left = points.slice(0, mid);
  const right = points.slice(mid);

  // find closest pair of points in left and right halves
  const leftResult = findClosestPair(left);
  const rightResult = findClosestPair(right);

  // update minimum distance and closest pair of points if necessary
  let minDistance = Math.min(leftResult.distance, rightResult.distance);
  let point1 = leftResult.point1;
  let point2 = leftResult.point2;
  if (rightResult.distance < leftResult.distance) {
    minDistance = rightResult.distance;
    point1 = rightResult.point1;
    point2 = rightResult.point2;
  }

  // find center of left and right halves
  const center = (points[mid - 1][0] + points[mid][0]) / 2;

  // filter points in center strip to only include points within minimum distance of center
  const centerPoints = points.filter(
    (point) => Math.abs(point[0] - center) < minDistance
  );

  // check for closer pair of points within center strip
  for (let i = 0; i < centerPoints.length; i++) {
    for (
      let j = i + 1;
      j < centerPoints.length &&
      Math.abs(centerPoints[j][1] - centerPoints[i][1]) < minDistance;
      j++
    ) {
      const distance = Math.sqrt(
        Math.pow(centerPoints[i][0] - centerPoints[j][0], 2) +
          Math.pow(centerPoints[i][1] - centerPoints[j][1], 2)
      );
      if (distance < minDistance) {
        minDistance = distance;
        point1 = centerPoints[i];
        point2 = centerPoints[j];
      }
    }
  }

  const distance: number = Number(minDistance?.toFixed(2) || 0);

  return { point1, point2, distance };
}

export function findMostSeparatedPair(points: number[][]): {
  point1: number[];
  point2: number[];
  distance: number;
} {
  // base case: return minimum distance if there are no points or only one point
  if (points.length <= 1) {
    return { point1: [], point2: [], distance: Number.MIN_VALUE };
  }

  // sort points by x-coordinate
  points.sort((a, b) => a[0] - b[0]);

  // divide points into left and right halves
  const mid = Math.floor(points.length / 2);
  const left = points.slice(0, mid);
  const right = points.slice(mid);

  // find most separated pair of points in left and right halves
  const leftResult = findMostSeparatedPair(left);
  const rightResult = findMostSeparatedPair(right);

  // update maximum distance and most separated pair of points if necessary
  let maxDistance = Math.max(leftResult.distance, rightResult.distance);
  let point1 = leftResult.point1;
  let point2 = leftResult.point2;
  if (rightResult.distance > leftResult.distance) {
    maxDistance = rightResult.distance;
    point1 = rightResult.point1;
    point2 = rightResult.point2;
  }

  // find center of left and right halves
  const center = (points[mid - 1][0] + points[mid][0]) / 2;

  // filter points in center strip to only include points within maximum distance of center
  const centerPoints = points.filter(
    (point) => Math.abs(point[0] - center) < maxDistance
  );

  // check for more separated pair of points within center strip
  for (let i = 0; i < centerPoints.length; i++) {
    for (
      let j = i + 1;
      j < centerPoints.length &&
      Math.abs(centerPoints[j][1] - centerPoints[i][1]) < maxDistance;
      j++
    ) {
      const distance = Math.sqrt(
        Math.pow(centerPoints[i][0] - centerPoints[j][0], 2) +
          Math.pow(centerPoints[i][1] - centerPoints[j][1], 2)
      );
      if (distance > maxDistance) {
        maxDistance = distance;
        point1 = centerPoints[i];
        point2 = centerPoints[j];
      }
    }
  }
  const distance: number = Number(maxDistance?.toFixed(2) || 0);
  return { point1, point2, distance };
}
