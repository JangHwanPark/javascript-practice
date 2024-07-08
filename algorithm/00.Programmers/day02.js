function solution(my_string, overwrite_string, s) {
  const res = [...my_string]
  res.splice(s, overwrite_string.length, overwrite_string)

  return [...my_string].splice(s, overwrite_string.length, overwrite_string);
}

solution("He11oWor1d", "lloWorl", 2)